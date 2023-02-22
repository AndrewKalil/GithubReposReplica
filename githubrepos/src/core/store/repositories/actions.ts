import { Dispatch } from "react";
import { getUserRepos } from "../../services/github-service";
import {
  getRepositories,
  getRepositoriesFail,
  getRepositoriesLoading,
} from "./reducer";

export const fetchRepositories =
  (login: string) => async (dispatch: Dispatch<any>) => {
    dispatch(getRepositoriesLoading());
    try {
      getUserRepos(login)
        .then((res) => {
          dispatch(getRepositories(res.data));
        })
        .catch((error) => {
          dispatch(getRepositoriesFail());
        });
    } catch (error) {
      console.log(error);
    }
  };
