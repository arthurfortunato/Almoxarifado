import { createContext, useState } from "react";
import { ISignInData, me, signIn } from "../services/resources/user";

interface IUserDto {
  id: string;
  name: string;
  email: string;
}

interface IContextData {
  user: IUserDto;
  UserSignIn: (userData: ISignInData) => Promise<IUserDto>;
  getCurrentUser: () => Promise<IUserDto>;
}

const AuthContext = createContext<IContextData>({} as IContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUserDto>(() => {
    const user = localStorage.getItem("@FAPERJ:User");

    if (user) {
      return JSON.parse(user);
    }

    return {} as IUserDto;
  });

  const UserSignIn = async (userData: ISignInData) => {
    const { data } = await signIn(userData);
    if (data?.status === "error") {
      return data;
    }
    if (data.accessToken) {
      localStorage.setItem("@FAPERJ:Token", data.accessToken);
    }
    return getCurrentUser();
  };

  //salvar usuário
  const getCurrentUser = async () => {
    const { data } = await me();
    setUser(data);
    localStorage.setItem("@FAPERJ:User", JSON.stringify(data));
    return data as IUserDto;
  };

  return (
    <AuthContext.Provider value={{ user, UserSignIn, getCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
