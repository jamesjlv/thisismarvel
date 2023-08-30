import { ReactNode } from "react";
import { IUserRepositoryModel } from "@/domain";

export interface AuthenticationContextData {
  profile: IUserRepositoryModel;
  token: string;
  handleUpdateToken: (params: HandleUpdateTokenProps) => Promise<void>;
  handleLogoff: () => Promise<void>;
  handleUpdateProfile: (params: IUserRepositoryModel) => Promise<void>;
}

export interface AuthenticationProviderProps {
  children: ReactNode;
}

export type HandleUpdateTokenProps = {
  token: string;
};
