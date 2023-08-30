import Realm from "realm";

export class UserModel extends Realm.Object<UserModel> {
  _id!: string;
  name!: string;
  email!: string;

  static schema = {
    name: "User",
    properties: {
      _id: "string",
      name: "string",
      email: "string",
    },
    primaryKey: "_id",
  };
}
