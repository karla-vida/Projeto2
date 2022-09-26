import React from "react";
import { useForm } from "react-hook-form";
import {
  DivFormUser,
  ErrorMessage,
  Button,
  MainFormUser,
  Input,
  DivForm,
  StyledLink,
} from "./FormUserStyled";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useBuscaCep } from "../../hooks";
import { cadastrarUsuarioService } from "../../services";
import { useNavigate } from "react-router-dom";
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
  cep: yup.string().required(messageRequired),
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
  const navigate = useNavigate();
  const { handleChange, logradouro, complemento, bairro, localidade, uf } =
    useBuscaCep();

  const onSubmitHandler = async (event) => {
    console.log({ event });
    const user = {
      fullName: event.nome,
      password: event.senha,
      email: event.email,
      photoUrl: event.photoUrl,
      phone: event.telefone,
      userAddress: {
        zipCode: event.cep,
        street: event.logradouro,
        number: event.numero,
        neighborhood: event.bairro,
        city: event.localidade,
        state: event.estado,
        complement: event.complemento,
      },
    };
    console.log(user);
    const status = cadastrarUsuarioService(user).then((result) => {
      return result;
    });

    if (status) {
      alert("Usuário cadastrado com sucesso");
      navigate("/Login");
    } else {
      alert("Erro no cadastro de usuário");
    }

    // const usuario = await autenticarFetch("popa@teste.com.br","popajr");
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
              <Input
                {...register("nome")}
                placeholder=""
                name="nome"
                type="text"
              />
              {errors.nome && (
                <ErrorMessage>{errors.nome.message}</ErrorMessage>
              )}
            </DivFormUser>

            <DivFormUser>
              <label htmlFor="urlFoto">URL de uma foto</label>
              <Input
                type="text"
                placeholder=""
                {...register("photoUrl")}
                id="Foto"
              />
            </DivFormUser>

            <DivFormUser>
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
            </DivFormUser>

            <DivFormUser>
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
              <Input
                type="text"
                placeholder=""
                {...register("telefone")}
                id="Telefone"
              />
            </DivFormUser>
          </DivFormUser>

          <DivFormUser>
            <DivFormUser>
              <label htmlFor="endereco">CEP*</label>
              <Input
                {...register("cep")}
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
                {...register("logradouro")}
                value={logradouro}
              />
            </DivFormUser>

            <DivFormUser>
              <label htmlFor="numero">Número</label>
              <Input {...register("numero")} type="text" placeholder="" />
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
                {...register("bairro")}
                value={bairro}
              />
            </DivFormUser>

            <DivFormUser>
              <label htmlFor="endereco">Localidade</label>
              <Input
                type="text"
                readOnly
                placeholder=""
                {...register("localidade")}
                value={localidade}
              />
            </DivFormUser>

            <DivFormUser>
              <label htmlFor="endereco">UF</label>
              <Input
                type="text"
                readOnly
                placeholder=""
                value={uf}
                {...register("estado")}
              />
            </DivFormUser>
          </DivFormUser>
        </DivForm>
        <DivForm>
          <Button className="btn primary" type="submit">
            Cadastrar
          </Button>
          <StyledLink to="/Login"> Login</StyledLink>
        </DivForm>
      </form>
    </MainFormUser>
  );
};
