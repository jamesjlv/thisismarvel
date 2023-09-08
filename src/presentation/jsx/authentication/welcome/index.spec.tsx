import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react-native";
import { WelcomeScreen } from "./index";
import { AppThemeProvider } from "@/presentation/hooks";
import { Routes, Stacks } from "@/main/routes/enums/Routes";

const makeSut = () => {
  return render(<WelcomeScreen />, { wrapper: AppThemeProvider });
};

let mockHandleNavigate = jest.fn();
let mockConsoleError = jest.fn();

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    navigate: (props: any) => mockHandleNavigate(props),
  }),
}));

describe("Welcome screen", () => {
  beforeEach(() => {
    cleanup();
    mockHandleNavigate.mockReset();
    console.error = mockConsoleError;
  });

  afterEach(() => {
    mockHandleNavigate = jest.fn();
  });

  it("Should render", () => {
    const { getByTestId } = makeSut();
    const welcomeScreen = getByTestId("WelcomeScreen");
    expect(welcomeScreen.children[0]).toBeTruthy();
  });

  it("Should redirect to home", () => {
    const { getByTestId } = makeSut();
    const welcomeScreenRedirectToHome = getByTestId(
      "WelcomeScreen-RedirectHome",
    );
    fireEvent.press(welcomeScreenRedirectToHome);

    expect(mockHandleNavigate).toBeCalledWith(Stacks.Authorized);
  });
  it("Should redirect to login", () => {
    const { getByTestId } = makeSut();
    const welcomeScreenRedirectToLogin = getByTestId("WelcomeScreen-Login");
    fireEvent.press(welcomeScreenRedirectToLogin);

    expect(mockHandleNavigate).toBeCalledWith(Routes.Login);
  });
  it("Should redirect to signUp", () => {
    const { getByTestId } = makeSut();
    const welcomeScreenRedirectToSignin = getByTestId("WelcomeScreen-Signup");
    fireEvent.press(welcomeScreenRedirectToSignin);

    expect(mockHandleNavigate).toBeCalledWith(Routes.SignUp);
  });
  it("Should not redirect to home", () => {
    const { getByTestId } = makeSut();
    mockConsoleError.mockClear();
    mockHandleNavigate = undefined;

    const welcomeScreenRedirectToHome = getByTestId(
      "WelcomeScreen-RedirectHome",
    );
    fireEvent.press(welcomeScreenRedirectToHome);

    expect(mockConsoleError).toBeCalledWith(
      "Não foi possível redirecionar para o login.",
    );
  });

  it("Should not redirect to login", () => {
    const { getByTestId } = makeSut();
    mockConsoleError.mockClear();
    mockHandleNavigate = undefined;
    const welcomeScreenRedirectToLogin = getByTestId("WelcomeScreen-Login");
    fireEvent.press(welcomeScreenRedirectToLogin);

    expect(mockConsoleError).toBeCalledWith(
      "Não foi possível redirecionar para o login.",
    );
  });

  it("Should not redirect to signup", () => {
    const { getByTestId } = makeSut();
    mockHandleNavigate = undefined;
    const welcomeScreenRedirectToSignin = getByTestId("WelcomeScreen-Signup");
    fireEvent.press(welcomeScreenRedirectToSignin);

    expect(mockConsoleError).toBeCalledWith(
      "Não foi possível redirecionar para o cadastro.",
    );
  });
});
