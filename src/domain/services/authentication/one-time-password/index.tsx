import {
  IOneTimePasswordDataTransferObjectModel,
  IOneTimePasswordModel,
} from "@/domain/models";

interface IRemoteOneTimePasswordService {
  exec: ({
    code,
    email,
  }: RemoteOneTimePasswordNamespace.Params) => Promise<RemoteOneTimePasswordNamespace.Model>;
}

export namespace RemoteOneTimePasswordNamespace {
  export type Params = IOneTimePasswordDataTransferObjectModel;
  export type Model = IOneTimePasswordModel;
  export type Interface = IRemoteOneTimePasswordService;
}
