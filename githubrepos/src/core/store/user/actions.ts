import { Dispatch } from "react";
import { getUserFromList, storeUser } from "../../services/auth";
import { getUserFail, getUserLoading, getUserSuccess } from "./reducer";

export const registerUser =
  (username: string, password: string, email: string) =>
  async (dispatch: Dispatch<any>) => {
    dispatch(getUserLoading());
    storeUser(username, password, email)
      .then((res) => {
        dispatch(getUserSuccess({ username, password: "#####", email }));
      })
      .catch((error) => {
        dispatch(getUserFail(error));
      });
  };

export const loginUser =
  (username: string, password: string) => async (dispatch: Dispatch<any>) => {
    dispatch(getUserLoading());
    getUserFromList(username, password)
      .then((res) => {
        if (res) {
          dispatch(
            getUserSuccess({
              username: res.username,
              password: "#####",
              email: res.email,
            })
          );
        }
      })
      .catch((error) => {
        dispatch(getUserFail(error));
      });
  };
