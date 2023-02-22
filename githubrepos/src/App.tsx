import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import RoutesComponent from "./components/routes.component";
import { getUser } from "./core/services/auth";
import {
  getAccessToken,
  getGithubUserData,
} from "./core/services/github-service";
import { RootState, useAppDispatch } from "./core/store";
import { fetchRepositories } from "./core/store/repositories/actions";
import {
  getUserSuccess,
  setGithubAccessToken,
  setGithubUser,
} from "./core/store/user/reducer";

function App() {
  const dispatch = useAppDispatch();
  const userState = useSelector((state: RootState) => state.user);

  useEffect(() => {
    const user = getUser();
    if (user) {
      dispatch(getUserSuccess({ ...user, password: "####" }));
    }

    const githubAccessToken = localStorage.getItem("github_access_token");
    if (githubAccessToken) {
      dispatch(setGithubAccessToken(githubAccessToken));
    }
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get("code");
    if (codeParam && localStorage.getItem("github_access_token") === null) {
      getAccessToken(codeParam).then((res) => {
        if (res) {
          dispatch(setGithubAccessToken(res));
        }
      });
    }
  }, []);

  useEffect(() => {
    if (userState.githubUser) {
      dispatch(fetchRepositories(userState.githubUser?.login || ""));
    }
  }, [userState.githubUser]);

  useEffect(() => {
    getGithubUserData().then((res) => {
      if (res.message !== "Bad credentials") {
        dispatch(setGithubUser(res));
      }
    });
  }, [userState.githubAccessToken]);

  return <RoutesComponent />;
}

export default App;
