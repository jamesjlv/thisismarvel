import React from "react";
import {
  act,
  cleanup,
  fireEvent,
  render,
  waitFor,
} from "@testing-library/react-native";
import { OneTimeCodePasswordScreen } from "./index";
import { AppThemeProvider } from "@/presentation/hooks";
import { OTPScreenParams } from "./props";
import faker from "@faker-js/faker";

const makeSut = (props: OTPScreenParams) => {
  return render(<OneTimeCodePasswordScreen {...props} />, {
    wrapper: AppThemeProvider,
  });
};

const mockHandleNavigate = jest.fn();

const mockParams = {
  email: faker.internet.email(),
  code: faker.datatype.number({ min: 111111, max: 999999 }),
};

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({ navigate: () => mockHandleNavigate() }),
  useRoute: () => ({
    params: mockParams,
  }),
  useFocusEffect: (callback: any) => callback(),
}));

const mockHandleVerifyOTP = { exec: jest.fn() };

describe("OneTimeCodePasswordScreen", () => {
  beforeEach(() => {
    cleanup();
    jest.useFakeTimers();
  });

  it("Should render", async () => {
    const { getByTestId } = makeSut({ handleVerifyOTP: mockHandleVerifyOTP });

    await act(() => {
      jest.runOnlyPendingTimers();
    });
  });

  it("Should be able to press box to write the code", async () => {
    const { getAllByTestId } = makeSut({
      handleVerifyOTP: mockHandleVerifyOTP,
    });
    await act(() => {
      jest.runOnlyPendingTimers();
    });
    const inputs = getAllByTestId("OTP-TouchableOTP");
    fireEvent.press(inputs[0]);
  });

  it("Should be able to focus ", async () => {
    const { getAllByTestId } = makeSut({
      handleVerifyOTP: mockHandleVerifyOTP,
    });
    await act(() => {
      jest.runOnlyPendingTimers();
    });
    const inputs = getAllByTestId("OTP-Input");
    act(() => {
      inputs[1].props.onKeyPress({ nativeEvent: { key: "." } });
      inputs[1].props.onKeyPress({ nativeEvent: { key: "-" } });
      inputs[1].props.onKeyPress({ nativeEvent: { key: "Backspace" } });
    });
    fireEvent.changeText(inputs[1], "0");
  });

  it("Should be able to inform the code", async () => {
    const { getAllByTestId } = makeSut({
      handleVerifyOTP: mockHandleVerifyOTP,
    });
    await act(() => {
      jest.advanceTimersByTime(45001);
      jest.advanceTimersByTimeAsync(45001);
    });
    const inputs = getAllByTestId("OTP-Input");
    act(() => {
      inputs[0].props.onChangeText("1");
      inputs[1].props.onChangeText("1");
      inputs[2].props.onChangeText("1");
      inputs[3].props.onChangeText("1");
      inputs[4].props.onChangeText("1");
      inputs[5].props.onChangeText("1");
    });
  });
  it("Should be able erase the code", async () => {
    const { getAllByTestId, rerender } = makeSut({
      handleVerifyOTP: mockHandleVerifyOTP,
    });
    await act(() => {
      jest.advanceTimersByTime(45001);
      jest.advanceTimersByTimeAsync(45001);
    });
    const inputs = getAllByTestId("OTP-Input");
    await act(() => {
      inputs[0].props.onChangeText("1");
      inputs[1].props.onChangeText("1");
      inputs[2].props.onChangeText("1");
      inputs[3].props.onChangeText("1");
      inputs[4].props.onChangeText("1");
      inputs[5].props.onChangeText("1");
    });
    rerender(
      <OneTimeCodePasswordScreen
        {...{
          handleVerifyOTP: mockHandleVerifyOTP,
        }}
      />,
    );
    const inputs2 = getAllByTestId("OTP-Input");
    await act(() => {
      inputs2[4].props.onKeyPress({ nativeEvent: { key: "Backspace" } });
      inputs2[5].props.onChangeText("");
      inputs2[5].props.onKeyPress({ nativeEvent: { key: "Backspace" } });
    });
  });
  it("Should be able to resend the code", async () => {
    const handleResendCode = jest.fn();
    const { getByTestId, rerender, unmount } = makeSut({
      handleVerifyOTP: { exec: (code) => handleResendCode(code) },
    });

    const resendButton = getByTestId("OTP-ResendCode");
    await act(() => {
      jest.advanceTimersByTime(45001);
      jest.advanceTimersByTimeAsync(45001);
      resendButton.props.onClick();
    });
    rerender(
      <OneTimeCodePasswordScreen
        {...{
          handleVerifyOTP: { exec: (code) => handleResendCode(code) },
        }}
      />,
    );
    const resendButton2 = await waitFor(() => getByTestId("OTP-ResendCode"));
    act(() => {
      resendButton2.props.onClick();
      jest.runOnlyPendingTimers();
      jest.advanceTimersByTime(45001);
      jest.advanceTimersByTimeAsync(45001);
      const nextButton = getByTestId("OTP-Next");
      fireEvent.press(nextButton);
    });
  });
});
