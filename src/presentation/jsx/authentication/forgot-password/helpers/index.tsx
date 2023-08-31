import { EMAIL_VALIDATOR } from "@/shared";

import * as yup from "yup";
export const YUP_VALIDATION = yup
  .object({
    email: yup
      .string()
      .required("Obrigatório informar o e-mail.")
      .matches(EMAIL_VALIDATOR, { message: "Utilize um e-mail válido." }),
  })
  .required();
