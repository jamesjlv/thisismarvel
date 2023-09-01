import { RemotePasswordRecoveryServiveNamespace } from "@/domain";

export type PasswordRecoveryScreenProps = {
  handleUpdatePassword: RemotePasswordRecoveryServiveNamespace.Interface;
};
export type PasswordRecoveryForm = {
  password: string;
  confirmPassword: string;
};

export type PasswordRecoveryRouteParams = {
  email: string;
  code: number;
  documentId: string;
};
