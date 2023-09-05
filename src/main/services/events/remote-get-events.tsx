import { GetRemoteEventsService } from "@/data/services";
import { manufactureApiUrl, manufactureHttpClient } from "@/main/factories";

export const manufactureRemoteGetEvents = (): GetRemoteEventsService =>
  new GetRemoteEventsService(
    manufactureHttpClient(),
    manufactureApiUrl("public/events?orderBy=-startDate"),
  );
