import React from "react";
const { shallow } = require("enzyme");
const { default: getGifs } = require("../../../helpers/getGifs");

describe("Prueba con getGifs Fetch", () => {
  test("debe de traer 10 elementos ", async () => {
    const gifs = await getGifs("One Punch");

    expect(gifs.length).toBe(10);
  });

  test("debe de traer 10 elementos ", async () => {
    const gifs = await getGifs("");
    console.log(gifs);
    expect(gifs.length).toBe(0);
  });
});
