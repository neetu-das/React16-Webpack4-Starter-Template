import React from "react";
// import renderer from "react-test-renderer";
// import ShallowRenderer from "react-test-renderer/shallow";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
import ShowCard from "../ShowCard";
import preload from "../../data.json";

const filteredShow = preload.shows.filter(
  show =>
    `${show.title} ${show.description}`.toUpperCase().indexOf("GAME") !== -1
)[0];

xdescribe("ShowCard", () => {
  xit("renders showcard correctly", () => {
    const component = shallow(
      <ShowCard key={filteredShow.imdbID} {...filteredShow} />
    );
    expect(component).toMatchSnapshot();
  });

  it("Search renders correctly", () => {
    const component = shallow(
      <ShowCard key={filteredShow.imdbID} {...filteredShow} />
    );
    expect(component.find("h3").text()).toEqual("Game of Thrones");
  });
});
