/* eslint no-debugger:0 */
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { string, shape } from "prop-types";
import Landing from "./Landing";
import Search from "./Search";
import Details from "./Details";
import preload from "../data.json";

const Four04 = () => <h1>404</h1>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  clearSearchTerm = () => {
    this.setState({ searchTerm: "" });
  };

  render() {
    debugger;
    const { searchTerm } = this.state;
    return (
      // <MemoryRouter
      //   initialEntries={["/", "/search", "/details/tt0903747"]}
      //   initialIndex={2}
      // >
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route
              exact
              path="/"
              component={props => {
                return (
                  <Landing
                    searchTerm={searchTerm}
                    handleSearchTermChange={this.handleSearchTermChange}
                    clearSearchTerm={this.clearSearchTerm}
                    {...props}
                  />
                );
              }}
            />
            <Route
              exact
              path="/search"
              component={props => {
                return (
                  <Search
                    searchTerm={searchTerm}
                    shows={preload.shows}
                    handleSearchTermChange={this.handleSearchTermChange}
                    {...props}
                  />
                );
              }}
            />
            <Route
              path="/details/:id"
              component={props => {
                return (
                  <Details
                    show={preload.shows.find(show => {
                      return props.match.params.id === show.imdbID;
                    })}
                    {...props}
                  />
                );
              }}
            />
            <Route component={Four04} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

App.defaultProps = {
  match: {}
};

App.propTypes = {
  match: shape({
    params: string
  })
};

export default App;
