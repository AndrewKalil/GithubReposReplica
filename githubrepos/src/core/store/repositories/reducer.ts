import { createSlice } from "@reduxjs/toolkit";
import { Repository } from "../../types/repository.type";
// import { Repository } from "firebase/auth";
// import { Login, RepositoryData } from "../../types/repository.type";
// import { AdditionInfo } from "../../utils/firebase/firebase.utils";

type RepositoryState = {
  repositories: Repository[];
  favorites: Repository[];
  isLoading: boolean;
  error?: Error | null;
};

const INITIAL_STATE: RepositoryState = {
  repositories: [],
  favorites: [],
  isLoading: false,
  error: null,
};

export const repositoryReducer = createSlice({
  name: "repository",
  initialState: INITIAL_STATE,
  reducers: {
    getRepositoriesLoading: (state) => {
      state.isLoading = true;
    },
    getRepositories: (state, action) => {
      state.repositories = action.payload;
      state.isLoading = false;
    },
    getRepositoriesFail: (state) => {
      state.isLoading = false;
    },
    setFavorites: (state, action) => {
      const exist =
        state.favorites.findIndex((x) => x.id === action.payload) >= 0;

      if (exist) {
        state.favorites = [
          ...state.favorites.filter((repo) => repo.id !== action.payload),
        ];
      } else {
        const newEntry = state.repositories.find(
          (repo) => repo.id === action.payload
        );
        if (newEntry) {
          state.favorites = [...state.favorites, newEntry];
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getRepositories,
  getRepositoriesFail,
  getRepositoriesLoading,
  setFavorites,
} = repositoryReducer.actions;
export const RepositoryReducerActionTypes = repositoryReducer.actions;
export default repositoryReducer.reducer;
