import Realm from "realm";

export class UserModel extends Realm.Object<UserModel> {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  email!: string;

  static schema = {
    name: "User",
    properties: {
      _id: "objectId",
      name: "string",
      email: "string",
    },
    primaryKey: "_id",
  };
}
