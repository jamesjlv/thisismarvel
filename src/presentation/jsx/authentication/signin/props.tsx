import { SetRegisterUserNamespace } from "@/domain";

export interface SignInFormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignInScreenProps {
  handleCreateNewUserAccount: SetRegisterUserNamespace.Interface;
}
