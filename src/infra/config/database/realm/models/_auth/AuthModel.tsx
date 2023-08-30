import Realm from "realm";

export class AuthModel extends Realm.Object<AuthModel> {
  _id!: string;
  token!: string;

  static schema = {
    name: "Auth",
    properties: {
      _id: "string",
      token: "string",
    },
    primaryKey: "_id",
  };
}
