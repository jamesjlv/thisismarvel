import React from "react";
import { act, cleanup, fireEvent, render } from "@testing-library/react-native";
import { LoginScreen } from "./index";
import { LoginScreenProps } from "./props";
import { AppThemeProvider } from "@/presentation/hooks";
import faker from "@faker-js/faker";

const makeSut = (props: LoginScreenProps) => {
  return render(<LoginScreen {...props} />, {
    wrapper: AppThemeProvider,
  });
};

let mockHandleNavigate = jest.fn();
let mockConsoleError = jest.fn();

let mockParams = {
  email: faker.internet.email(),
  code: faker.datatype.number({ min: 111111, max: 999999 }),
  documentId: faker.datatype.uuid(),
};

jest.mock("@react-navigation/core", () => ({
  useRoute: () => ({
    params: mockParams,
  }),
}));

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    navigate: (props: any) => mockHandleNavigate(props),
  }),
}));

let mockAlertData = { message: faker.random.words() } as { message?: string };

let mockAlert = jest.fn();
jest.mock("@/presentation/hooks/methods/alert", () => ({
  useAlert: () => ({
    alertData: mockAlertData,
    alert: mockAlert,
  }),
}));

const mockHandleUpdateProfile = jest.fn();
const mockHandleUpdateToken = jest.fn();

jest.mock("@/presentation/hooks/providers/auth", () => ({
  useAuthHook: () => ({
    handleUpdateProfile: mockHandleUpdateProfile,
    handleUpdateToken: mockHandleUpdateToken,
  }),
}));

describe("LoginScreen", () => {
  beforeEach(() => {
    cleanup();
  });

  it("Should render", () => {
    const mockExec = (data: any) => jest.fn(data);
    const { getByTestId } = makeSut({
      handleUserSimpleAuthentication: { exec: mockExec },
    } as unknown as LoginScreenProps);

    const loginContainer = getByTestId("LoginScreenContainer");
    expect(loginContainer.children).toBeTruthy();
  });

  it("Should be able to type user and password", () => {
    const mockExec = (data: any) => jest.fn(data);
    const { getAllByTestId } = makeSut({
      handleUserSimpleAuthentication: { exec: mockExec },
    } as unknown as LoginScreenProps);

    const userInput = getAllByTestId("LoginScreen-User");
    const passswordInput = getAllByTestId("LoginScreen-Password");

    fireEvent.changeText(userInput[0], "tecnologia@pontua.com.br");
    fireEvent.changeText(passswordInput[0], "pontua123");

    expect(userInput[0].props.value).toBe("tecnologia@pontua.com.br");
    expect(passswordInput[0].props.value).toBe("pontua123");
  });

  it("Should call login when user is informed", async () => {
    const mockExec = (data: any) => ({
      itsAllowed: true,
      token: "123",
      email: "tecnologia@pontua.com.br",
      name: "tecnologia pontua",
    });
    const { getAllByTestId, getByTestId } = makeSut({
      handleUserSimpleAuthentication: { exec: mockExec },
    } as unknown as LoginScreenProps);

    const userInput = getAllByTestId("LoginScreen-User");
    const passswordInput = getAllByTestId("LoginScreen-Password");

    fireEvent.changeText(userInput[0], "tecnologia@pontua.com.br");
    fireEvent.changeText(passswordInput[0], "pontua123");

    expect(userInput[0].props.value).toBe("tecnologia@pontua.com.br");
    expect(passswordInput[0].props.value).toBe("pontua123");

    const loginButton = getByTestId("LoginScreen-Login");
    await act(() => {
      fireEvent.press(loginButton);
    });
    expect(mockHandleUpdateProfile).toBeCalledWith({
      email: "tecnologia@pontua.com.br",
      name: "tecnologia pontua",
    });
  });
  it("Should alert user if wasn't able to login", async () => {
    const mockExec = (data: any) => ({
      itsAllowed: false,
      token: undefined,
      email: "tecnologia@pontua.com.br",
      name: "tecnologia pontua",
    });
    const { getAllByTestId, getByTestId } = makeSut({
      handleUserSimpleAuthentication: { exec: mockExec },
    } as unknown as LoginScreenProps);

    const userInput = getAllByTestId("LoginScreen-User");
    const passswordInput = getAllByTestId("LoginScreen-Password");

    fireEvent.changeText(userInput[0], "tecnologia@pontua.com.br");
    fireEvent.changeText(passswordInput[0], "pontua123");

    expect(userInput[0].props.value).toBe("tecnologia@pontua.com.br");
    expect(passswordInput[0].props.value).toBe("pontua123");

    const loginButton = getByTestId("LoginScreen-Login");
    await act(() => {
      fireEvent.press(loginButton);
    });
    expect(mockAlert).toBeCalledWith({
      message: "E-mail e ou senha inválidos.",
    });
  });
  it("Should alert user if wasn't able to connect to the server", async () => {
    const { getAllByTestId, getByTestId } = makeSut({
      handleUserSimpleAuthentication: { exec: undefined },
    } as unknown as LoginScreenProps);

    const userInput = getAllByTestId("LoginScreen-User");
    const passswordInput = getAllByTestId("LoginScreen-Password");

    fireEvent.changeText(userInput[0], "tecnologia@pontua.com.br");
    fireEvent.changeText(passswordInput[0], "pontua123");

    expect(userInput[0].props.value).toBe("tecnologia@pontua.com.br");
    expect(passswordInput[0].props.value).toBe("pontua123");

    const loginButton = getByTestId("LoginScreen-Login");
    await act(() => {
      fireEvent.press(loginButton);
    });
    expect(mockAlert).toBeCalledWith({
      message: "Erro ao fazer login, tente novamente.",
    });
  });

  it("Should be able press button forgot password", () => {
    const mockExec = (data: any) => jest.fn(data);
    const { getByTestId } = makeSut({
      handleUserSimpleAuthentication: { exec: mockExec },
    } as unknown as LoginScreenProps);

    const forgotPassword = getByTestId("LoginScreen-ForgotPassword");
    fireEvent.press(forgotPassword);
  });

  it("Should be return alert message when its not possible to redirect to forgot password screen", () => {
    const mockExec = (data: any) => jest.fn(data);
    const { getByTestId } = makeSut({
      handleUserSimpleAuthentication: { exec: mockExec },
    } as unknown as LoginScreenProps);
    mockHandleNavigate = undefined as unknown as typeof mockHandleNavigate;
    const forgotPassword = getByTestId("LoginScreen-ForgotPassword");
    fireEvent.press(forgotPassword);
    expect(mockAlert).toBeCalledWith({
      type: "error",
      message: "Erro ao tentar recuperar a senha.",
    });
  });

  it("Should return an alert with message about google login disabled", () => {
    const mockExec = (data: any) => jest.fn(data);
    const { getByTestId } = makeSut({
      handleUserSimpleAuthentication: { exec: mockExec },
    } as unknown as LoginScreenProps);

    const googleButton = getByTestId("LoginScreen-Google");
    fireEvent.press(googleButton);
    expect(mockAlert).toBeCalledWith({
      type: "error",
      message: "Login com Google não disponível.",
    });
  });

  it("Should return an alert with message about apple login disabled", () => {
    const mockExec = (data: any) => jest.fn(data);
    const { getByTestId } = makeSut({
      handleUserSimpleAuthentication: { exec: mockExec },
    } as unknown as LoginScreenProps);

    const appleButton = getByTestId("LoginScreen-Apple");
    fireEvent.press(appleButton);
    expect(mockAlert).toBeCalledWith({
      type: "error",
      message: "Login com Apple não disponível.",
    });
  });

  it("Should return an alert with message about facebook login disabled", () => {
    const mockExec = (data: any) => jest.fn(data);
    const { getByTestId } = makeSut({
      handleUserSimpleAuthentication: { exec: mockExec },
    } as unknown as LoginScreenProps);

    const facebookButton = getByTestId("LoginScreen-Facebook");
    fireEvent.press(facebookButton);
    expect(mockAlert).toBeCalledWith({
      type: "error",
      message: "Login com Facebook não disponível.",
    });
  });
});
