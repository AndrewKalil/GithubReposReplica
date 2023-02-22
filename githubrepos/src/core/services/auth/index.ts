import { User } from "../../types/user.type";

export const storeUser = async (
  username: string,
  password: string,
  email: string
) => {
  return generateUsersList
    .then((res) => {
      const findUser = res.find((user) => user.username === username);
      if (findUser) {
        throw new Error("User already exist!");
      } else {
        localStorage.setItem(
          "users",
          JSON.stringify([...res, { username, password, email }])
        );
        setUser(username, password, email);
      }
    })
    .catch((e) => {
      alert(e);
    });
};

const generateUsersList: Promise<User[]> = new Promise((res, rej) => {
  setTimeout(() => {
    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify([]));
      res([]);
    } else {
      res(JSON.parse(localStorage.getItem("users") || "") as User[]);
    }
  }, 300);
});

export const getUserFromList = async (username: string, password: string) => {
  return generateUsersList
    .then((res) => {
      const findUser = res.find((user) => user.username === username);
      if (!findUser) {
        throw new Error("Invalid user!");
      }

      if (findUser.password !== password) {
        throw new Error("Invalid credentials!");
      }

      localStorage.setItem("user", JSON.stringify(findUser));
      return findUser;
    })
    .catch((e) => {
      alert(e);
    });
};

const setUser = (username: string, password: string, email: string) =>
  localStorage.setItem("user", JSON.stringify({ username, password, email }));

export const getUser = () => {
  try {
    return JSON.parse(localStorage.getItem("user") || "") as User;
  } catch (error) {
    return null;
  }
};
