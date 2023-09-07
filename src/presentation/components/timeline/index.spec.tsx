import React from "react";
import "@testing-library/jest-native/extend-expect";
import { cleanup, fireEvent, render } from "@testing-library/react-native";
import { Timeline } from "./index";
import { AppThemeProvider } from "@/presentation/hooks";

export const timelineProps = [
  { year: "2020", title: "2020Year" },
  { year: "2021", title: "2021Year" },
];

const makeSut = () => {
  return render(<Timeline timeline={timelineProps} />, {
    wrapper: AppThemeProvider,
  });
};

describe("Timeline component", () => {
  afterEach(() => {
    cleanup();
  });

  it("Should Render", () => {
    const { getByTestId } = makeSut();
    const TimelineComponent = getByTestId("TimelineComponent");

    expect(TimelineComponent).toBeTruthy();
  });

  it("Should render the correct year", () => {
    const { getAllByTestId } = makeSut();
    const TimelineYearComponent = getAllByTestId("Timeline-YearTitle");

    expect(TimelineYearComponent[0].children[0]).toEqual(timelineProps[0].year);
  });

  it("Should render the correct year", () => {
    const { getAllByTestId } = makeSut();
    const TimelineItemDescriptionComponent = getAllByTestId(
      "Timeline-ItemDescription",
    );

    expect(TimelineItemDescriptionComponent[1].children[0]).toEqual(
      timelineProps[1].title,
    );
  });

  it("Should reverse timeline", () => {
    const { getByTestId, getAllByTestId } = makeSut();
    const reverseButton = getByTestId("Timeline-ReverseTimeline");
    const timelineYearComponent = getAllByTestId("Timeline-YearTitle");
    expect(timelineYearComponent[0].children[0]).toEqual(timelineProps[0].year);
    fireEvent.press(reverseButton);
    expect(timelineYearComponent[0].children[0]).toEqual(timelineProps[1].year);
  });
});
