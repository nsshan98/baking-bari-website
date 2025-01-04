import Image from "next/image";
import React from "react";

const PopularItemsList = ({ popular }) => {
  const { title, image } = popular;
  return (
    <div className="flex gap-4 pb-2">
      <Image
        style={{ borderRadius: "10px" }}
        src={image}
        alt={title}
        width={100}
        height={100}
      />
      <h1>{title}</h1>
    </div>
  );
};

export default PopularItemsList;
