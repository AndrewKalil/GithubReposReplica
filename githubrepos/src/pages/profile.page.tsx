import { Avatar } from "@material-tailwind/react";
import Button from "@material-tailwind/react/components/Button";
import Person from "@mui/icons-material/Person";
import AvatarMUI from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import PageTemplate from "../components/templates/page.template";
import { RootState } from "../core/store";

const ProfilePage = () => {
  const [reload, setReload] = useState(false);
  const syncGithubUser = () => {
    const clientId = process.env.REACT_APP_CLIENT_ID as string;
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${clientId}`
    );
    setReload(!reload);
  };
  const { user, githubUser } = useSelector((state: RootState) => state.user);
  console.log(githubUser);

  return (
    <PageTemplate>
      <div className="w-full h-full flex flex-col">
        {githubUser ? (
          <Avatar
            variant="circular"
            src={githubUser.avatar_url}
            alt="avatar"
            size="xxl"
          />
        ) : (
          <AvatarMUI sx={{ width: "110px", height: "110px", fontSize: "24px" }}>
            <Person sx={{ width: "50px", height: "50px" }} />
          </AvatarMUI>
        )}
        <h1 className="text-xl flex-none">
          <span className="font-semibold text-teal-500">Username: </span>
          {user?.username}
        </h1>
        <h1 className="text-xl flex-none">
          <span className="font-semibold text-teal-500">Email: </span>
          {user?.email}
        </h1>
        <Divider />
        <div className="flex flex-grow flex-col">
          {githubUser && (
            <>
              <h1 className="text-2xl text-center font-semibold text-teal-500">
                Github User Info
              </h1>
              <div className="text-xl">
                <span className="text-black font-semibold">Login: </span>
                {githubUser.login}
              </div>
              <div className="text-xl">
                <span className="text-black font-semibold">Name: </span>
                {githubUser.name}
              </div>
              <div className="text-xl">
                <span className="text-black font-semibold">Created Date: </span>
                {new Date(githubUser.created_at).toDateString()}
              </div>
              <div className="text-xl">
                <span className="text-black font-semibold">Followers: </span>
                {githubUser.followers}
              </div>
              <div className="text-xl">
                <span className="text-black font-semibold">Following: </span>
                {githubUser.following}
              </div>
              <div className="text-xl">
                <span className="text-black font-semibold">
                  Github Profile Url:{" "}
                </span>
                <a
                  href={githubUser.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400"
                >
                  {githubUser.html_url}
                </a>
              </div>
            </>
          )}
        </div>
        <Button
          disabled={githubUser ? true : false}
          className="w-72 self-center"
          onClick={syncGithubUser}
        >
          Sync github account
        </Button>
      </div>
    </PageTemplate>
  );
};

export default ProfilePage;
