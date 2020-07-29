import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("Escribe una categoría");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    // console.log("Handle llamado");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      return;
    }
    setCategories((c) => [inputValue, ...c]);
    setInputValue("Escribe una categoría");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onClick={() => {
          setInputValue("");
        }}
      ></input>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
