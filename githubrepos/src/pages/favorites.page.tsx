import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CardGridComponent from "../components/card_grid.component";
import PageTemplate from "../components/templates/page.template";
import { RootState } from "../core/store";

const FavoritesPage = () => {
  const { favorites, repositories } = useSelector(
    (state: RootState) => state.repos
  );
  const navigate = useNavigate();
  const navigateToProfile = () => {
    navigate("/profile");
  };

  return (
    <PageTemplate>
      {favorites.length > 0 ? (
        <CardGridComponent data={favorites} />
      ) : repositories.length < 1 ? (
        <div className="w-full h-full flex items-center justify-center">
          You must sync your github profile!{" "}
          <span
            onClick={navigateToProfile}
            className="cursor-pointer text-blue-400 underline pl-1"
          >
            sync now
          </span>
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          You have not added any repos to your favorites list!
        </div>
      )}
    </PageTemplate>
  );
};

export default FavoritesPage;
