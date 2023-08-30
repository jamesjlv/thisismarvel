import { RemoteAuthenticationLoginAccountNamespace } from "@/domain";

export type LoginRouteParams = {
  email: string;
  password: string;
};

export interface LoginScreenProps {
  handleUserSimpleAuthentication: RemoteAuthenticationLoginAccountNamespace.Interface;
}
export type UserLoginParams = RemoteAuthenticationLoginAccountNamespace.Params;
