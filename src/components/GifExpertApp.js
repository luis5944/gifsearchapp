import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import GifGrid from "./GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  return (
    <>
      <div className="container">
        <h2>GifSearchApp</h2>
      </div>

      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
