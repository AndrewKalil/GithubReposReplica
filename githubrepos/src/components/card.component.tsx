import Button from "@material-tailwind/react/components/Button";
import React from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../core/store";
import { setFavorites } from "../core/store/repositories/reducer";
import { Repository } from "../core/types/repository.type";
import FavoriteCheckbox from "./favorite-checkbox.component";

type CardProps = {
  repo: Repository;
};

const CardComponent = ({ repo }: CardProps) => {
  const favorites = useSelector((state: RootState) => state.repos.favorites);
  const dispatch = useAppDispatch();
  const { name, html_url, owner, id } = repo;

  const onCheckboxChange = () => {
    dispatch(setFavorites(id));
  };

  return (
    <div
      className="w-full h-44 bg-gray-700
      drop-shadow-lg border
      border-solid rounded-md p-2 relative flex flex-col"
    >
      <h2 className="text-white">Name: {name}</h2>
      <h6 className="text-white">Owner: {owner.login}</h6>
      <a
        className="absolute self-center bottom-2"
        href={html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="text" color="light-green" className="text-xs p-2">
          Checkout repo
        </Button>
      </a>
      <div className="absolute self-end bottom-1">
        <FavoriteCheckbox
          onCheckboxChange={onCheckboxChange}
          checked={favorites.findIndex((item) => item.id === id) >= 0}
        />
      </div>
    </div>
  );
};

export default CardComponent;
