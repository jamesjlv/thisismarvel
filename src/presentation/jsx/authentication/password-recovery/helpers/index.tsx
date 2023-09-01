import * as yup from "yup";
export const YUP_VALIDATION = yup
  .object({
    password: yup.string().required("Obrigatório informar uma senha."),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), undefined], "Confirmação de senha incorreta")
      .required("Obrigatório confirmar a senha"),
  })
  .required();
