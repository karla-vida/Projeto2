import React, { useState } from "react";
import { useAuth } from "../../contexts";
import {
  DivLoginPage,
  TitleLoginPage,
  FormLoginPage,
  FieldDiv,
  FieldInput,
  ButtonLoginPage,
} from "./LoginPageStyled";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const {authenticated, user, handleLogin} = useAuth();

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
          <label htmlFor="email">Email</label>
          <FieldInput
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          />
        </FieldDiv>
        <div className="actions">
          <ButtonLoginPage type="submit">Entrar</ButtonLoginPage>
        </div>
      </FormLoginPage>
    </DivLoginPage>
  );
};

export default Login;
