import { GetRemoteCharactersComicsByIdService } from "@/data";
import { manufactureApiUrl, manufactureHttpClient } from "@/main/factories";

export const manufactureRemoteGetCharactersComicsById =
  (): GetRemoteCharactersComicsByIdService =>
    new GetRemoteCharactersComicsByIdService(
      manufactureHttpClient(),
      manufactureApiUrl("public/characters"),
    );
