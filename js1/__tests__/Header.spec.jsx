import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
import ShowCard from "../ShowCard";
import Header from "../Header";
import { Link } from "react-router-dom";
import preload from "../../data.json";

xtest("renders correctly", () => {
  const component = shallow(<Header showSearch />);
  expect(component).toMatchSnapshot();
});

xtest("render back link when there is no show search", () => {
  const component = shallow(<Header />);
  expect(component.contains(<Link to="/search">Back</Link>)).toEqual(true);
});
