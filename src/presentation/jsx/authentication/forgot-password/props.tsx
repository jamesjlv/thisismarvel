import { RemoteForgotPasswordServiveNamespace } from "@/domain";

export interface ForgotPasswordScreenRouteProps {
  email?: string;
}

export interface ForgotPasswordScreenProps {
  handleSendEmailWithCodeForResetingPassword: RemoteForgotPasswordServiveNamespace.Interface;
}
