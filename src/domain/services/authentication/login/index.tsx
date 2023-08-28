import {
  ILoginAccountModel,
  ILoginDataTransferObjectModel,
} from "@/domain/models";

interface IRemoteAuthenticationLoginAccountService {
  exec: ({
    email,
    password,
  }: RemoteAuthenticationLoginAccountNamespace.Params) => Promise<RemoteAuthenticationLoginAccountNamespace.Model>;
}

export namespace RemoteAuthenticationLoginAccountNamespace {
  export type Params = ILoginDataTransferObjectModel;
  export type Model = ILoginAccountModel;
  export type Interface = IRemoteAuthenticationLoginAccountService;
}
