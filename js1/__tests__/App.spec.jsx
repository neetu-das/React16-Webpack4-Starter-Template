import React from "react";
import { MemoryRouter } from "react-router-dom";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
import App from "../App.jsx";
import Search from "../Search.jsx";
import ShowCard from "../ShowCard";
import Landing from "../Landing.jsx";
import Details from "../Details.jsx";
import preload from "../../data.json";

xdescribe("App", () => {
  it("should show Search component for / router (using memory router)", () => {
    // const searchWord = "Game";
    const component = mount(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    component
      .find("input")
      .simulate("change", { target: { value: searchWord } });
    const filteredCount = preload.shows.filter(
      show =>
        `${show.title} ${show.description}`
          .toUpperCase()
          .indexOf(searchWord.toUpperCase()) !== -1
    ).length;
    expect(component.find(ShowCard).length).toEqual(filteredCount);
    // expect(component.find(Search)).toHaveLength(2);
    // expect(component).toMatchSnapshot();
  });
});
