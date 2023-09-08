import { EMAIL_VALIDATOR, NAME_VALIDATOR } from "@/shared";

import * as yup from "yup";
export const YUP_VALIDATION = yup
  .object({
    email: yup
      .string()
      .required("Obrigatório informar o e-mail.")
      .matches(EMAIL_VALIDATOR, { message: "Utilize um e-mail válido." }),
    name: yup
      .string()
      .required("Obrigatório informar o nome completo.")
      .matches(NAME_VALIDATOR, { message: "Informe o nome completo" }),
    password: yup.string().required("Obrigatório informar uma senha."),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), undefined], "Confirmação de senha incorreta")
      .required("Obrigatório confirmar a senha"),
  })
  .required();

export enum ErrorTranslate {
  "Error, found another user with same e-mail." = "Já existe um usuário com o e-mail cadastrado.",
  default = "Erro desconhecido, tente novamente.",
}
