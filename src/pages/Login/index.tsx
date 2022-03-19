import {
  AsideContainer,
  AsideBodyWelcome,
  ContainerStyled,
  BodyContainerStyled,
  LoginStyled,
  AsideBodyLogo,
} from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export const Login = () => {
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
            <Input type="text" placeholder="Insira o seu CPF ou CNPJ..." />
            <label>Senha</label>
            <Input type="password" placeholder="•••••••••••" />

            <Button>ENTRAR</Button>
          </form>
        </LoginStyled>
      </BodyContainerStyled>
    </ContainerStyled>
  );
};
