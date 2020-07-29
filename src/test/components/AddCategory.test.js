import React from "react";
const { shallow } = require("enzyme");
const { AddCategory } = require("../../components/AddCategory");

describe("Componente AddCategory", () => {
  const setCategories = () => {};
  const wrapper = shallow(<AddCategory setCategories={setCategories} />);
  test("Mostrar el componente de manera correcta ", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola Mundo";

    input.simulate("change", { target: { value } });
  });
});
