import React from "react";
import { act, cleanup, fireEvent, render } from "@testing-library/react-native";
import { PasswordRecoveryScreen } from "./index";
import { PasswordRecoveryScreenProps } from "./props";
import { AppThemeProvider } from "@/presentation/hooks";

import faker from "@faker-js/faker";

const makeSut = (props: PasswordRecoveryScreenProps) => {
  return render(<PasswordRecoveryScreen {...props} />, {
    wrapper: AppThemeProvider,
  });
};

let mockHandleNavigate = jest.fn();

let mockParams = {
  email: faker.internet.email(),
  code: faker.datatype.number({ min: 111111, max: 999999 }),
  documentId: faker.datatype.uuid(),
};

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    navigate: (props: any) => mockHandleNavigate(props),
  }),
  useRoute: () => ({
    params: mockParams,
  }),
}));

let mockAlertData = { message: faker.random.words() } as { message?: string };

let mockAlert = (data: any) => jest.fn(data);
jest.mock("@/presentation/hooks/methods/alert", () => ({
  useAlert: () => ({
    alertData: mockAlertData,
    alert: mockAlert,
  }),
}));

let mockPlatform = "android";

jest.mock("react-native/Libraries/Utilities/Platform", () => ({
  OS: mockPlatform,
  select: () => null,
}));

describe("Password Recovery Screen", () => {
  beforeEach(() => {
    cleanup();
    mockHandleNavigate.mockReset();
    mockPlatform = "android";
  });

  it("Should render", () => {
    mockPlatform = "ios";
    const mockHandleUpdatePassword = (props: any) => jest.fn(props);
    const { getByTestId } = makeSut({
      handleUpdatePassword: { exec: mockHandleUpdatePassword },
    } as unknown as PasswordRecoveryScreenProps);

    const onscreen = getByTestId("PasswordRecovery-Screen");
    expect(onscreen.children).toBeTruthy();
  });
  it("Should be able to inform password", () => {
    const mockHandleUpdatePassword = (props: any) => jest.fn(props);
    const { getAllByTestId } = makeSut({
      handleUpdatePassword: { exec: mockHandleUpdatePassword },
    } as unknown as PasswordRecoveryScreenProps);

    const inputPassword = getAllByTestId("PasswordRecovery-Input");
    fireEvent.changeText(inputPassword[1], "123!@#qwe");

    expect(inputPassword[0].props.value).toBe("123!@#qwe");
  });

  it("Should call api to reset password", async () => {
    const mockHandleUpdatePassword = (props: any) => jest.fn(props);
    const { getAllByTestId, queryByTestId } = makeSut({
      handleUpdatePassword: { exec: mockHandleUpdatePassword },
    } as unknown as PasswordRecoveryScreenProps);

    const inputPassword = getAllByTestId("PasswordRecovery-Input");
    const inputConfirmPassword = getAllByTestId(
      "PasswordRecovery-InputConfirm",
    );
    fireEvent.changeText(inputPassword[0], "123!@#qwe");
    fireEvent.changeText(inputConfirmPassword[0], "123!@#qwe");

    expect(inputPassword[0].props.value).toBe("123!@#qwe");
    expect(inputConfirmPassword[0].props.value).toBe("123!@#qwe");

    const buttonRecovery = queryByTestId("PasswordRecovery-RecoveryButton");
    await act(() => {
      fireEvent.press(buttonRecovery);
    });
  });

  it("Should warn user if some error happens", async () => {
    const mockHandleUpdatePassword = (props: any) => jest.fn(props);
    const { getAllByTestId, queryByTestId } = makeSut({
      handleUpdatePassword: { exec: mockHandleUpdatePassword },
    } as unknown as PasswordRecoveryScreenProps);

    const inputPassword = getAllByTestId("PasswordRecovery-Input");
    const inputConfirmPassword = getAllByTestId(
      "PasswordRecovery-InputConfirm",
    );
    fireEvent.changeText(inputPassword[0], "123!@#qwe");
    fireEvent.changeText(inputConfirmPassword[0], "123!@#qwe");

    expect(inputPassword[0].props.value).toBe("123!@#qwe");
    expect(inputConfirmPassword[0].props.value).toBe("123!@#qwe");

    const buttonRecovery = queryByTestId("PasswordRecovery-RecoveryButton");
    await act(() => {
      mockHandleNavigate = undefined as unknown as typeof mockHandleNavigate;
      fireEvent.press(buttonRecovery);
    });
  });
});
