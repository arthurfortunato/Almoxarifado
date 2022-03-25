import { api } from '../api';

export interface ISignInData {
    email: string;
    password: string;
}

export interface ISignUpData {
    name: string;
    email: string;
    password: string;
}

export interface IUserDto {
    id: string;
    name: string;
    email: string;
}

const signIn = async (data: ISignInData) => {
    const user = await api.post('/user/signin', data);
    return user;
}

const signUp = async (data: ISignUpData) => {
    const user = await api.post('/user/signup', data);
    return user;
}

const me = async () => {
    return api.get<IUserDto>('/user/me');

}
export { signIn, signUp, me }