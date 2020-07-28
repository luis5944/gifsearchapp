import React, { useState } from "react";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("Escribe una categoría");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      return;
    }
    setCategories((c) => [inputValue,...c ]);
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
