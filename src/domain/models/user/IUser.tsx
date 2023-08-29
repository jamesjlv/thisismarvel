export type IUserModel = {
  documentId: string;
  name: string;
  password: string;
  email: string;
  confirmed: boolean;
  created_at: number;
  updated_at: number;
};

export type IUserDataTransferObjectModel = {
  name: string;
  password: string;
  email: string;
  confirmed?: boolean;
  created_at: number;
};
