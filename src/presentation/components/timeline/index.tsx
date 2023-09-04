import React, { useState } from "react";

import {
  Separator,
  ItemWrapper,
  TimeDate,
  TimeLine,
  TimeLineWrapper,
  TimelineContent,
  TimelineHeader,
  Years,
  YearsTitle,
  ItemContent,
  ItemTitle,
  OrderButton,
} from "./styles";
import { TimelineProps } from "./props";
import ListIcon from "@assets/icons/sort-amount-down.svg";
import { scale } from "@/shared/styles";

export const Timeline: React.FC<TimelineProps> = ({ timeline }) => {
  const [timelineState, setTimeline] = useState(timeline);

  const handleReverseTimeline = () => {
    setTimeline([...timeline.reverse()]);
  };

  return (
    <TimeLineWrapper>
      <TimelineHeader>
        <TimeDate>Data</TimeDate>
        <TimeLine>Timeline</TimeLine>
        <OrderButton onPress={handleReverseTimeline}>
          <ListIcon width={scale(24)} height={scale(24)} />
        </OrderButton>
      </TimelineHeader>
      <TimelineContent>
        <Years>
          {timelineState?.map((item) => (
            <YearsTitle key={item.year}>{item.year}</YearsTitle>
          ))}
        </Years>
        <Separator />
        <ItemWrapper>
          {timelineState?.map((item, index) => (
            <ItemContent lastOne={index === 1} key={item.title}>
              <ItemTitle>{item.title}</ItemTitle>
            </ItemContent>
          ))}
        </ItemWrapper>
      </TimelineContent>
    </TimeLineWrapper>
  );
};
