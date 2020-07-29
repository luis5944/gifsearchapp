import React from "react";
import PropTypes from "prop-types";

export const GifGridItem = ({ id, title, img }) => {
  return (
    <div className="card animate__animated animate__bounce animate__delay-2s">
      <img key={id} src={img} alt={title}></img>
      <p>{title}</p>
    </div>
  );
};

GifGridItem.propTypes = {
  id: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
