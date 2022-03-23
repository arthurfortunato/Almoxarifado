import { createContext, useState } from "react";
import { ISignInData, me, signIn } from "../services/resources/user";

interface IUserDto {
  id: string;
  name: string;
  email: string;
}

interface IContextData {
  user: IUserDto | null;
  UserSignIn: (userData: ISignInData) => Promise<IUserDto>;
  getCurrentUser: () => Promise<IUserDto>;
  Logout: () => void;
}

const AuthContext = createContext<IContextData>({} as IContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUserDto | null>(() => {
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

  const getCurrentUser = async () => {
    const { data } = await me();
    setUser(data);
    localStorage.setItem("@FAPERJ:User", JSON.stringify(data));
    return data as IUserDto;
  };

  function Logout() {
    setUser(null)
    localStorage.removeItem("@FAPERJ:Token")
    localStorage.removeItem("@FAPERJ:User")
    setTimeout(() => {
      window.location.reload();
      localStorage.removeItem("@FAPERJ:Token")
      localStorage.removeItem("@FAPERJ:User")
    }, 2000);
  }

  return (
    <AuthContext.Provider value={{ user, UserSignIn, getCurrentUser, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
