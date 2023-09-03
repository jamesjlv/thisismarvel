import { GetRemoteCharactersService } from "@/data/services/characters/remote-get-characters";
import { manufactureApiUrl, manufactureHttpClient } from "@/main/factories";

export const manufactureRemoteGetCharacters = (): GetRemoteCharactersService =>
  new GetRemoteCharactersService(
    manufactureHttpClient(),
    manufactureApiUrl("public/characters?&limit=23"),
  );
