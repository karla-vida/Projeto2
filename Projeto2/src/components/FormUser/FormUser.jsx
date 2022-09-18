import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import {
  DivFormUser,
  ErrorMessage,
  Button,
  MainFormUser,
  Input,
  DivForm,
} from "./FormUserStyled";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useBuscaCep } from "../../hooks";
const messageRequired = "Por favor, preencha este campo";

const schema = yup.object().shape({
  nome: yup.string().required(messageRequired),
  email: yup.string().required(messageRequired),
  senha: yup.string().required(messageRequired),
  validacao: yup
    .string()
    .oneOf(
      [yup.ref("senha")],
      "Favor digitar a mesma senha do campo anterior.",
    ),
  endereco: yup.string().required(messageRequired),
  complemento: yup.string().required(messageRequired),
});

export const FormUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { handleChange, logradouro, complemento, bairro, localidade, uf } =
    useBuscaCep();

  const onSubmitHandler = (event) => {
    console.log({ event });
  };

  return (
    <MainFormUser>
      <h1> Cadastro </h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
    <DivForm>
    <DivFormUser>
        <DivFormUser>
          <label htmlFor="nomeCompleto">Nome completo*</label>
          <Input {...register("nome")} placeholder="" type="text" />
          {errors.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}
        </DivFormUser>

        <DivFormUser>
          <label htmlFor="urlFoto">URL de uma foto</label>
          <Input type="text" placeholder="" id="Foto" />
        </DivFormUser>

        <DivFormUser>
          <label htmlFor="eMail">E-mail*</label>
          <Input
            {...register("email")}
            type="text"
            placeholder=""
            id="E-mail"
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </DivFormUser>

        <DivFormUser>
          <label htmlFor="senha">Senha*</label>
          <Input {...register("senha")} type="text" placeholder="" id="Senha" />
          {errors.senha && <ErrorMessage>{errors.senha.message}</ErrorMessage>}
        </DivFormUser>

        <DivFormUser>
          <label htmlFor="validacaoSenha">Validação de senha*</label>
          <Input
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
          <Input type="text" placeholder="" id="Telefone" />
        </DivFormUser>
        </DivFormUser>
       
        <DivFormUser>
        <DivFormUser>
          <label htmlFor="endereco">CEP*</label>
          <Input
            {...register("endereco")}
            type="text"
            placeholder=""
            id="Endereço"
            onChange={(e) => {
              handleChange(e.target.value);
            }}
          />
          {errors.endereco && (
            <ErrorMessage>{errors.endereco.message}</ErrorMessage>
          )}
        </DivFormUser>

        <DivFormUser>
          <label htmlFor="endereco">Logradouro</label>
          <Input
            type="text"
            readOnly
            placeholder=""
            id="logradouro"
            value={logradouro}
          />
        </DivFormUser>

        <DivFormUser>
          <label htmlFor="endereco">Complemento</label>
          <Input
            {...register("complemento")}
            type="text"
            placeholder=""
            id="complemento"
          />
          {errors.complemento && (
            <ErrorMessage>{errors.complemento.message}</ErrorMessage>
          )}
        </DivFormUser>

        <DivFormUser>
          <label htmlFor="endereco">Bairro</label>
          <Input
            type="text"
            readOnly
            placeholder=""
            id="bairro"
            value={bairro}
          />
        </DivFormUser>

        <DivFormUser>
          <label htmlFor="endereco">Localidade</label>
          <Input
            type="text"
            readOnly
            placeholder=""
            id="localidade"
            value={localidade}
          />
        </DivFormUser>

        <DivFormUser>
          <label htmlFor="endereco">UF</label>
          <Input type="text" readOnly placeholder="" id="uf" value={uf} />
        </DivFormUser>
        </DivFormUser>
        </DivForm>
        <DivForm>
          <Button className="btn primary" type="submit">
            Cadastrar
          </Button>
          <Button className="btn secondary" type="button">
            Login
          </Button>
        </DivForm>
       
      </form>
    </MainFormUser>
  );
};

FormUser.propTypes = {};
