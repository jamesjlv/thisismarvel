import {
  ILoginAccountModel,
  ILoginDataTransferObjectModel,
} from "@/domain/models";

interface IRemoteAuthenticationLoginAccount {
  exec: ({
    email,
    password,
  }: RemoteAuthenticationLoginAccount.Params) => Promise<RemoteAuthenticationLoginAccount.Model>;
}

export namespace RemoteAuthenticationLoginAccount {
  export type Params = ILoginDataTransferObjectModel;
  export type Model = ILoginAccountModel;
  export type Interface = IRemoteAuthenticationLoginAccount;
}
