import React from "react";
import { connect, Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
import Search, { Unwrapped as UnwrappedSearch } from "../Search.jsx";
import ShowCard from "../ShowCard";
import store from "../store";
import preload from "../../data.json";
import { setSearchTerm } from "../actionCreators";

xdescribe("Search", () => {
  xit("renders correctly", () => {
    const component = shallow(
      <UnwrappedSearch shows={preload.shows} searchTerm="" />
    );
    expect(component).toMatchSnapshot();
  });

  xit("should render correct amount of shows", () => {
    const component = shallow(
      <UnwrappedSearch shows={preload.shows} searchTerm="" />
    );
    expect(component.find(ShowCard).length).toEqual(preload.shows.length);
  });

  xit("should render correct amount of shows based on search", () => {
    const searchWord = "Black";
    const component = shallow(
      <UnwrappedSearch shows={preload.shows} searchTerm={searchWord} />
    );
    const filteredCount = preload.shows.filter(
      show =>
        `${show.title} ${show.description}`
          .toUpperCase()
          .indexOf(searchWord.toUpperCase()) !== -1
    ).length;
    expect(component.find(ShowCard).length).toEqual(filteredCount);
  });

  it("should render correct amount of shows based on search with redux", () => {
    const searchWord = "Black";
    store.dispatch(setSearchTerm(searchWord));
    const component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Search shows={preload.shows} />
        </MemoryRouter>
      </Provider>
    );
    const filteredCount = preload.shows.filter(
      show =>
        `${show.title} ${show.description}`
          .toUpperCase()
          .indexOf(searchWord.toUpperCase()) !== -1
    ).length;
    expect(component.find(ShowCard).length).toEqual(2);
  });
});
