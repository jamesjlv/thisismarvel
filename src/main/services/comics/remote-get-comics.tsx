import { GetRemoteComicsService } from "@/data/services";
import { manufactureApiUrl, manufactureHttpClient } from "@/main/factories";

export const manufactureRemoteGetComics = (): GetRemoteComicsService =>
  new GetRemoteComicsService(
    manufactureHttpClient(),
    manufactureApiUrl("public/comics?&limit=23"),
  );
