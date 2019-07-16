import React from "react";
// import renderer from "react-test-renderer";
// import ShallowRenderer from "react-test-renderer/shallow";
import { MemoryRouter } from "react-router-dom";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
import Search from "../Search.jsx";
import ShowCard from "../ShowCard";
import preload from "../../data.json";

xtest("Search renders correctly", () => {
  //   const component = renderer.create(<Search />);
  //   const tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  //   const renderer = new ShallowRenderer();
  //   renderer.render(<Search />);
  //   const result = renderer.getRenderOutput();
  //   expect(result).toMatchSnapshot();
  const component = mount(
    <MemoryRouter>
      <Search shows={preload.shows} />
    </MemoryRouter>
  );
  expect(component).toMatchSnapshot();
});

xdescribe("Search", () => {
  it("should render correct amount of shows", () => {
    const component = shallow(<Search shows={preload.shows} searchTerm="" />);
    expect(component.find(ShowCard).length).toEqual(preload.shows.length);
  });

  it("should render correct amount of shows based on search", () => {
    const searchWord = "Black";
    const component = shallow(
      <Search shows={preload.shows} searchTerm={searchWord} />
    );
    // component
    //   .find("input")
    //   .simulate("change", { target: { value: searchWord } });
    const filteredCount = preload.shows.filter(
      show =>
        `${show.title} ${show.description}`
          .toUpperCase()
          .indexOf(searchWord.toUpperCase()) !== -1
    ).length;
    expect(component.find(ShowCard).length).toEqual(filteredCount);
    // expect(component).toMatchSnapshot();
  });
});
