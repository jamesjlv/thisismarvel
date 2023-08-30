import Realm from "realm";

export class AuthModel extends Realm.Object<AuthModel> {
  _id!: Realm.BSON.ObjectId;
  token!: string;

  static schema = {
    name: "Auth",
    properties: {
      _id: "objectId",
      token: "string",
    },
    primaryKey: "_id",
  };
}
