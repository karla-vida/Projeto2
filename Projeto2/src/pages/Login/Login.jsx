import React, { useState } from "react";
import { useAuth } from "../../contexts";
import {
  DivLoginPage,
  TitleLoginPage,
  FormLoginPage,
  FieldDiv,
  FieldInput,
  ButtonLoginPage,
  StyledLink,
  DivButton,
} from "./LoginPageStyled";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { authenticated, user, handleLogin } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, senha);
    console.log("submit");
  };

  return (
    <DivLoginPage>
      <TitleLoginPage>Login</TitleLoginPage>
      <FormLoginPage onSubmit={handleSubmit}>
        <FieldDiv>
          <label htmlFor="email">E-mail</label>
          <FieldInput
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Seu e-mail"
          />
        </FieldDiv>
        <FieldDiv>
          <label htmlFor="senha">Senha</label>
          <FieldInput
            type="senha"
            name="senha"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Sua senha"
            required
          />
        </FieldDiv>

        <DivButton>
          <ButtonLoginPage type="submit">Entrar</ButtonLoginPage>
          <StyledLink to="/"> Cadastrar</StyledLink>
        </DivButton>
      </FormLoginPage>
    </DivLoginPage>
  );
};

export default Login;
