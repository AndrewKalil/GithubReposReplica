import { Api } from "..";

const accessToken = process.env.REACT_APP_GH_PAT || "";
export const RepositoriesApi = new Api("repos", "", accessToken);
