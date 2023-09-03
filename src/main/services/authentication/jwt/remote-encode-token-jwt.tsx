import JWT from "expo-jwt";
import Config from "react-native-config";
import { SupportedAlgorithms } from "expo-jwt/dist/types/algorithms";

import { DatabaseEncode } from "@/data";
import { IUserRepositoryModel } from "@/domain";

export class EncodeJWT implements DatabaseEncode {
  encode = async (params: IUserRepositoryModel) => {
    try {
      const { name, email } = params;

      const key = Config.JWT_KEY;

      const fiveDays = 60000 * 60 * 24 * 5;
      const jwtGenerated = JWT.encode(
        { name, email, exp: Date.now() + fiveDays },
        key,
        { algorithm: SupportedAlgorithms.HS256 },
      );

      return jwtGenerated;
    } catch (error) {
      return "";
    }
  };
}

export const manufactureEncodeJWT = (): EncodeJWT => new EncodeJWT();
