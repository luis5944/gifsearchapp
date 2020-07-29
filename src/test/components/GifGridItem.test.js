import React from "react";
const { shallow } = require("enzyme");
const { GifGridItem } = require("../../components/GifGridItem");

describe("debe mostrar el componente correctamente", () => {
  const title = "Un titulo";
  const img = "https://localhost/algo.jpg";
  const id = 1;
  const wraper = shallow(<GifGridItem id={id} title={title} img={img} />);
  test("mostrar ", () => {
    expect(wraper).toMatchSnapshot();
  });

  test("debe de tener un <p></p> con el title", () => {
    const p = wraper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("debe de tener el src img y el alt ", () => {
    const imge = wraper.find("img");

    expect(imge.props().src).toBe(img);
    expect(imge.prop("alt")).toBe(title);
  });

  test("debe  de tener una clase animate__bounce ", () => {
    const div = wraper.find("div");

    console.log(div.props().className);

    expect(div.props().className.includes("animate__bounce")).toBe(true);
  });
});
