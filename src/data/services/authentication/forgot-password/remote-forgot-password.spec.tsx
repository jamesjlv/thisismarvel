import { DatabaseClientMockSpy, HttpPostClientSpy } from "@/data/tests";
import { SetRemoteForgotPasswordService } from "./remote-forgot-password";
import faker from "@faker-js/faker";
import { RemoteForgotPasswordServiveNamespace } from "@/domain";

type SutTypes = {
  sut: SetRemoteForgotPasswordService;
  databaseClientSpy: DatabaseClientMockSpy;
};

const makeSut = (collection?: string): SutTypes => {
  const databaseClientSpy = new DatabaseClientMockSpy();
  const sut = new SetRemoteForgotPasswordService(databaseClientSpy);

  return { sut, databaseClientSpy };
};

describe("RemoteForgotPassword", () => {
  it("Should call DatabaseClient with correct email to recover password", async () => {
    const email = faker.internet.email();
    const code = faker.datatype.number({ min: 111111, max: 999999 });

    const { sut, databaseClientSpy } = makeSut();

    await sut.exec({ email });

    expect(databaseClientSpy.body?.to?.[0]).toBe(email);
  });

  it("Should call DatabaseClient and throw an error if dont send email", async () => {
    const email = "";
    const code = faker.datatype.number({ min: 111111, max: 999999 });

    const { sut, databaseClientSpy } = makeSut();

    const action = async () => {
      await sut.exec({ email });
    };

    expect(action()).rejects.toThrow("Email not found.");
  });
});
