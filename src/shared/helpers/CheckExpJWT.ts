import JWT from "expo-jwt";
import Config from "react-native-config";

export type JWTDecodeReturn = {
  name: string;
  email: string;
  exp: number;
};

export const JWTExpValidator = (jwt: string): boolean => {
  try {
    const JWTDecoded = JWT.decode<JWTDecodeReturn>(
      jwt,
      Config.JWT_KEY,
    ) as unknown as JWTDecodeReturn;
    const currentDate = Date.now();

    return currentDate > JWTDecoded.exp;
  } catch (error) {
    console.log(error);
    return false;
  }
};
