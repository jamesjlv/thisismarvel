import firestore, { Filter } from "@react-native-firebase/firestore";

import { DatabaseResponse } from "@/data";
import { DatabaseClient, DatabaseRequest } from "@/data";

export class FirestoreClient implements DatabaseClient<any> {
  async request(params: DatabaseRequest): Promise<DatabaseResponse<any>> {
    let databaseResponse: any;

    function handleFilter(): typeof Filter {
      switch (params?.filterBehavior) {
        case "and":
          return Filter.and.apply(
            params?.filters?.map((filter) =>
              Filter(
                filter.leftCondition,
                filter.condition,
                filter.rightCondition,
              ),
            ),
          );
        case "unique":
          const FilterUnique = params?.filters?.[0];
          return Filter(
            FilterUnique?.leftCondition,
            FilterUnique?.condition,
            FilterUnique?.rightCondition,
          );
        case "or":
          return Filter.or.apply(
            params?.filters?.map((filter) =>
              Filter(
                filter.leftCondition,
                filter.condition,
                filter.rightCondition,
              ),
            ),
          );
        default:
          return Filter.and.apply(
            params?.filters?.map((filter) =>
              Filter(
                filter.leftCondition,
                filter.condition,
                filter.rightCondition,
              ),
            ),
          );
      }
    }

    try {
      databaseResponse = await firestore()
        .collection(params.collection)
        .where(handleFilter())
        .get();
      databaseResponse["status"] = 200;
    } catch (error) {
      databaseResponse = error.response;
      databaseResponse["status"] = 500;
    }
    return {
      statusCode: databaseResponse.status,
      body: databaseResponse,
    };
  }

  async create({
    collection,
    body,
  }: DatabaseRequest): Promise<DatabaseResponse<any>> {
    let databaseResponse: any;

    try {
      databaseResponse = await firestore().collection(collection).add(body);
      databaseResponse["status"] = 200;
    } catch (error) {
      databaseResponse = error.response;
      databaseResponse["status"] = 500;
    }
    return {
      statusCode: databaseResponse.status,
      body: databaseResponse,
    };
  }

  async delete({
    collection,
    body,
    documentId,
  }: DatabaseRequest): Promise<DatabaseResponse<any>> {
    let databaseResponse: any;

    try {
      databaseResponse = await firestore()
        .collection(collection)
        .doc(documentId)
        .delete();
      databaseResponse["status"] = 200;
    } catch (error) {
      databaseResponse = error.response;
      databaseResponse["status"] = 500;
    }
    return {
      statusCode: databaseResponse.status,
      body: databaseResponse,
    };
  }

  async update({
    collection,
    body,
    documentId,
  }: DatabaseRequest): Promise<DatabaseResponse<any>> {
    let databaseResponse: any;

    try {
      databaseResponse = await firestore()
        .collection(collection)
        .doc(documentId)
        .update(body);
      databaseResponse["status"] = 200;
    } catch (error) {
      databaseResponse = error.response;
      databaseResponse["status"] = 500;
    }
    return {
      statusCode: databaseResponse.status,
      body: databaseResponse,
    };
  }
}
