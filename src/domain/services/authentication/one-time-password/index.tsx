import {
  IOneTimePasswordDataTransferObjectModel,
  IOneTimePasswordModel,
} from "@/domain/models";

interface IRemoteOneTimePasswordService {
  exec: ({
    code,
  }: RemoteOneTimePasswordNamespace.Params) => Promise<RemoteOneTimePasswordNamespace.Model>;
}

export namespace RemoteOneTimePasswordNamespace {
  export type Params = IOneTimePasswordModel;
  export type Model = IOneTimePasswordDataTransferObjectModel;
  export type Interface = IRemoteOneTimePasswordService;
}
