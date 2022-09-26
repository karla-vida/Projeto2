import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import {
  DivProfileEdit,
  ErrorMessage,
  Button,
  MainProfileEdit,
  Input,
  DivProfile,
} from "./ProfileEditStyled";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useBuscaCep } from "../../hooks";
const messageRequired = "Por favor, preencha este campo";

const schema = yup.object().shape({
  nome: yup.string().required(messageRequired),
  email: yup.string().email().required(messageRequired),
  senha: yup
    .string()
    .required(messageRequired)
    .min(8, "A senha deve ter pelo menos 8 caracteres"),
  validacao: yup
    .string()
    .oneOf(
      [yup.ref("senha")],
      "Favor digitar a mesma senha do campo anterior.",
    ),
  endereco: yup.string().required(messageRequired),
  complemento: yup.string().required(messageRequired),
});

export const ProfileEdit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { handleChange, logradouro, complemento, bairro, localidade, uf } =
    useBuscaCep();

  const onSubmitHandler = async (event) => {
    console.log({ event });
  };

  return (
    <MainProfileEdit>
      <h1> Meu Perfil </h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <DivProfile>
          <DivProfileEdit>
            <DivProfileEdit>
              <label htmlFor="nomeCompleto">Nome completo*</label>
              <Input {...register("nome")} placeholder="" type="text" />
              {errors.nome && (
                <ErrorMessage>{errors.nome.message}</ErrorMessage>
              )}
            </DivProfileEdit>

            <DivProfileEdit>
              <label htmlFor="urlFoto">URL de uma foto</label>
              <Input type="text" placeholder="" id="Foto" />
            </DivProfileEdit>

            <DivProfileEdit>
              <label htmlFor="eMail">E-mail*</label>
              <Input
                {...register("email")}
                type="text"
                placeholder=""
                id="E-mail"
              />
              {errors.email && (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
              )}
            </DivProfileEdit>

            <DivProfileEdit>
              <label htmlFor="senha">Senha*</label>
              <Input
                {...register("senha")}
                type="text"
                placeholder=""
                id="Senha"
              />
              {errors.senha && (
                <ErrorMessage>{errors.senha.message}</ErrorMessage>
              )}
            </DivProfileEdit>

            <DivProfileEdit>
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
            </DivProfileEdit>

            <DivProfileEdit>
              <label htmlFor="telefone">Telefone</label>
              <Input type="text" placeholder="" id="Telefone" />
            </DivProfileEdit>
          </DivProfileEdit>

          <DivProfileEdit>
            <DivProfileEdit>
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
            </DivProfileEdit>

            <DivProfileEdit>
              <label htmlFor="endereco">Logradouro</label>
              <Input
                type="text"
                readOnly
                placeholder=""
                id="logradouro"
                value={logradouro}
              />
            </DivProfileEdit>

            <DivProfileEdit>
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
            </DivProfileEdit>

            <DivProfileEdit>
              <label htmlFor="endereco">Bairro</label>
              <Input
                type="text"
                readOnly
                placeholder=""
                id="bairro"
                value={bairro}
              />
            </DivProfileEdit>

            <DivProfileEdit>
              <label htmlFor="endereco">Localidade</label>
              <Input
                type="text"
                readOnly
                placeholder=""
                id="localidade"
                value={localidade}
              />
            </DivProfileEdit>

            <DivProfileEdit>
              <label htmlFor="endereco">UF</label>
              <Input type="text" readOnly placeholder="" id="uf" value={uf} />
            </DivProfileEdit>
          </DivProfileEdit>
        </DivProfile>
        <DivProfile>
          <Button className="btn primary" type="submit">
            Salvar
          </Button>
          <Button className="btn secondary" type="button">
            Cancelar
          </Button>
        </DivProfile>
      </form>
    </MainProfileEdit>
  );
};

ProfileEdit.propTypes = {};
