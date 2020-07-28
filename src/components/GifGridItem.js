import React from "react";

export const GifGridItem = ({ id, title, img }) => {
  return (
    <div className="card animate__animated animate__bounce animate__delay-2s">
      <img key={id} src={img} alt={title}></img>
      <p>{title}</p>
    </div>
  );
};
