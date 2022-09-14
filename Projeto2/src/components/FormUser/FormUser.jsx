import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import { DivFormUser, ErrorMessage, Button, MainFormUser } from "./FormUserStyled";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const messageRequired = "Por favor, preencha este campo";

const schema = yup.object().shape({
  nome: yup.string().required(messageRequired),
  email: yup.string().required(messageRequired),
  senha: yup.string().required(messageRequired),
  validacao: yup.string().oneOf([null]).required(messageRequired),
  endereco: yup.string().required(messageRequired),
});

export const FormUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (event) => {
    alert("teste");
    console.log({ event });
  };

  return (
    <MainFormUser>
        <h1> Cadastro </h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <DivFormUser>
          <label htmlFor="nomeCompleto">Nome completo*</label>
          <input {...register("nome")} placeholder="" type="text" />
          {errors.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}
        </DivFormUser>

        <DivFormUser>
          <label htmlFor="urlFoto">URL de uma foto</label>
          <input type="text" placeholder="" id="Foto" />
        </DivFormUser>

        <DivFormUser>
          <label htmlFor="eMail">E-mail*</label>
          <input
            {...register("email")}
            type="text"
            placeholder=""
            id="E-mail"
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </DivFormUser>

        <DivFormUser>
          <label htmlFor="senha">Senha*</label>
          <input
            {...register("senha")}
            type="text"
            placeholder=""
            id="Senha"
          />
          {errors.senha && <ErrorMessage>{errors.senha.message}</ErrorMessage>}
        </DivFormUser>

        <DivFormUser>
          <label htmlFor="validacaoSenha">Validação de senha*</label>
          <input
            {...register("validacao")}
            type="text"
            placeholder=""
            id="Valicao"
          />
          {errors.validacao && (
            <ErrorMessage>{errors.validacao.message}</ErrorMessage>
          )}
        </DivFormUser>

        <DivFormUser>
          <label htmlFor="telefone">Telefone</label>
          <input type="text" placeholder="" id="Telefone" />
        </DivFormUser>

        <DivFormUser>
          <label htmlFor="endereco">Endereço*</label>
          <input
            {...register("endereco")}
            type="text"
            placeholder=""
            id="Endereço"
          />
          {errors.endereco && (
            <ErrorMessage>{errors.endereco.message}</ErrorMessage>
          )}
        </DivFormUser>

        <DivFormUser>
          <Button className="btn primary" type="submit">
            Cadastrar
          </Button>
          <Button className="btn secondary" type="button">
            Login
          </Button>
        </DivFormUser>
      </form>
    </MainFormUser>
  );
};

FormUser.propTypes = {};
