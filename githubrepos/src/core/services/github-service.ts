import axios from "axios";
import { Repository } from "../types/repository.type";

const backendApi = process.env.REACT_APP_BACKEND_API as string;

export const getAccessToken = async (codeParam: string) =>
  await axios
    .get(`${backendApi}getAccessToken?code=${codeParam}`)
    .then((res: any) => {
      if (res.data.access_token) {
        localStorage.setItem("github_access_token", res.data.access_token);
      }
      return res.data;
    })
    .catch((e) => console.log(e));

export const getGithubUserData = async () =>
  await axios
    .get(`${backendApi}getUserData`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("github_access_token")}`,
      },
    })
    .then((res: any) => res.data)
    .catch((e) => console.log(e));

export const getUserRepos = async (login: string) => {
  return await axios.get<Repository>(
    `https://api.github.com/users/${login}/repos`
  );
};
