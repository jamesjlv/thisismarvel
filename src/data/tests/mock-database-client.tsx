import {
  DatabaseClient,
  DatabaseRequest,
  DatabaseResponse,
  DatabaseReturnStatusCode,
} from "../database";

export class DatabaseClientMockSpy implements DatabaseClient {
  collection?: string;
  documentId?: string;
  body?: any;
  response: DatabaseResponse = {
    statusCode: DatabaseReturnStatusCode.success,
  };

  async request({
    collection,
    body,
    filters,
    documentId,
    filterBehavior,
  }: DatabaseRequest): Promise<DatabaseResponse> {
    this.collection = collection;
    this.body = body;
    this.documentId = documentId;

    const bodyRest =
      filterBehavior === "unique"
        ? {
            [filters?.[0].leftCondition!]: filters?.[0].rightCondition,
          }
        : {};

    return {
      ...this.response,
      body: {
        collection: this.collection,
        documentId: this.documentId,
        ...this.body,
        ...bodyRest,
      },
    };
  }
  async delete({
    collection,
    body,
    filters,
    documentId,
  }: DatabaseRequest): Promise<DatabaseResponse> {
    this.collection = collection;
    this.body = body;
    this.documentId = documentId;

    return {
      ...this.response,
      body: {
        collection: this.collection,
        ...this.body,
        documentId: this.documentId,
      },
    };
  }
  async create({
    collection,
    body,
    filters,
    documentId,
  }: DatabaseRequest): Promise<DatabaseResponse> {
    this.collection = collection;
    this.body = body;
    this.documentId = documentId;

    return {
      ...this.response,
      body: {
        collection: this.collection,
        ...this.body,
        documentId: this.documentId,
      },
    };
  }

  async update({
    collection,
    body,
    filters,
    documentId,
  }: DatabaseRequest): Promise<DatabaseResponse> {
    this.collection = collection;
    this.body = body;
    this.documentId = documentId;

    return {
      ...this.response,
      body: {
        collection: this.collection,
        ...this.body,
        documentId: this.documentId,
      },
    };
  }
}
