import { ICharactersResultsModel } from "@/domain";

export const handleCreateUrlImage = (
  item: ICharactersResultsModel["thumbnail"],
) => {
  try {
    const extension = item.extension;
    const url = item.path;
    return `${url}.${extension}`;
  } catch (error) {
    return "";
  }
};
