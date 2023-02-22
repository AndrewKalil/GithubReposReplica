export const num = 1;
// import { PropsWithChildren, useEffect, useState } from "react";
// import { createContext } from "react";
// import {
//   RepositoriesApi,
//   StarredRepositoriesApi,
// } from "../services/api/repositories";
// import { getUserFromList, storeUser } from "../services/auth";
// import { Repository } from "../types/repository.type";
// import { User } from "../types/user.type";

// export const AppContext = createContext({
//   repos: [] as Repository[],
//   getRepos: () => {},
//   starred: [] as Repository[],
//   getStarredRepos: () => {},
//   user: {} as User | null,
//   loginUser: (username: string, password: string) => {},
//   signupUser: (username: string, password: string) => {},
// });

// export const AppProvider = ({ children }: PropsWithChildren) => {
//   const [repos, setRepos] = useState<Repository[]>([]);
//   const [starred, setStarred] = useState<Repository[]>([]);
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     getRepos();
//     getCurrentUser();
//     getStarredRepos();
//   }, []);

//   const getCurrentUser = () => {
//     if (localStorage.getItem("user")) {
//       let user = JSON.parse(localStorage.getItem("user") || "");
//       setUser(user);
//     }
//   };

//   const getRepos = () => {
//     RepositoriesApi.get().then((res) => {
//       setRepos(res.data);
//     });
//   };

//   const getStarredRepos = () => {
//     StarredRepositoriesApi.get().then((res) => {
//       setStarred(res.data);
//     });
//   };

//   const loginUser = (username: string, password: string) => {
//     getUserFromList(username, password).then((res) => {
//       setUser(user);
//     });
//   };

//   const signupUser = (username: string, password: string) => {
//     storeUser(username, password).then((res) => {
//       setUser({ username, password });
//     });
//   };

//   const value = {
//     repos,
//     getRepos,
//     starred,
//     getStarredRepos,
//     user,
//     loginUser,
//     signupUser,
//   };

//   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
// };
