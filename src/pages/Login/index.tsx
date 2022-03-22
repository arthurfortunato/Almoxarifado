import {
  AsideContainer,
  AsideBodyWelcome,
  ContainerStyled,
  BodyContainerStyled,
  LoginStyled,
} from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { UserSignIn } = useAuth();
  const navigate = useNavigate();

  const handleToSignIn = async () => {
    try {
      const data = {
        email,
        password
      }
      const response = await UserSignIn(data);

      if (response.email) {
        navigate('/products');
        return;
      }
    } catch (error) {
     alert("Usuário ou Senha inválidos")
    }
  }

  return (
    <ContainerStyled>
      <AsideContainer>
        <AsideBodyWelcome>
          <strong>Bem Vindo</strong>
          <p>
            O sistema foi construído para uso exclusivo de funcionários da
            FAPERJ. Por favor, não compartilhe o seu login.
          </p>
        </AsideBodyWelcome>
      </AsideContainer>

      <BodyContainerStyled>
        <LoginStyled id="login">
          <form action="">
            <h2>Por favor insira seus dados para prosseguir</h2>
            <label>CPF/CNPJ (Somente Números)</label>
            <Input
              type="text"
              placeholder="Insira o seu e-mail..."
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
            <label>Senha</label>
            <Input 
              type="password" 
              placeholder="•••••••••••"
              value={password}
              onChange={event => setPassword(event.target.value)} 
            />

            <Button type="button" onClick={handleToSignIn}>ENTRAR</Button>
          </form>
        </LoginStyled>
      </BodyContainerStyled>
    </ContainerStyled>
  );
};
