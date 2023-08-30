import { AuthRepositoryDataTransferModel, AuthRepositoryModel } from "@domain";

export interface IAuthRepositoryModelService {
  create: (
    params: AuthRepositoryDataTransferModel,
  ) => Promise<AuthRepositoryModel>;
  delete: (id: string) => Promise<void>;
  find: () => Promise<AuthRepositoryDataTransferModel[] | undefined>;
  findById: (id: string) => Promise<AuthRepositoryModel | undefined>;
  update: (params: AuthRepositoryModel) => Promise<AuthRepositoryModel>;
}
