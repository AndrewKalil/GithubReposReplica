import React from "react";
import { Repository } from "../core/types/repository.type";
import CardComponent from "./card.component";

type CardGridProps = {
  data: Repository[];
};

const CardGridComponent = ({ data }: CardGridProps) => {
  return (
    <div
      style={{ gridAutoRows: "11rem" }}
      className="w-full h-full grid grid-cols-4 gap-4 overflow-auto p-4"
    >
      {data.map((repo) => {
        const { id } = repo;
        return <CardComponent key={id} repo={repo} />;
      })}
    </div>
  );
};

export default CardGridComponent;
