export type IUserUpdateDataTransferObject = {
  name: string;
  password: string;
  email: string;
  confirmed?: boolean;
  updated_at: Date;
};
