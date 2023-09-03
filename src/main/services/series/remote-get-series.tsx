import { GetRemoteSeriesService } from "@/data/services";
import { manufactureApiUrl, manufactureHttpClient } from "@/main/factories";

export const manufactureRemoteGetSeries = (): GetRemoteSeriesService =>
  new GetRemoteSeriesService(
    manufactureHttpClient(),
    manufactureApiUrl("public/series?&limit=23&orderBy=-startYear"),
  );
