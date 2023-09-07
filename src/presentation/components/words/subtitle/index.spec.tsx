import React from "react";
import "@testing-library/jest-native/extend-expect";
import { render } from "@testing-library/react-native";
import { Subtitle } from "./index";
import { AppThemeProvider } from "@/presentation/hooks";

describe("Subtitle component", () => {
  it("Should Render", () => {
    const { getByTestId } = render(<Subtitle text="algo" />, {
      wrapper: AppThemeProvider,
    });
    const SubtitleComponent = getByTestId("SubtitleComponent");

    expect(SubtitleComponent).toBeTruthy();
  });

  it("Should render the correct text", () => {
    const Text = "This is a Text";
    const { getByTestId } = render(<Subtitle text={Text} />, {
      wrapper: AppThemeProvider,
    });
    const SubtitleComponent = getByTestId("SubtitleComponent");

    expect(SubtitleComponent.children[0]).toBe(Text);
  });
});
