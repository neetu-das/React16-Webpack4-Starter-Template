/* eslint no-debugger:0 */
/* eslint global-require:0 */
import React from "react";
import { Route, Switch } from "react-router-dom";
import { string, shape } from "prop-types";
import { Provider } from "react-redux";
import store from "./store";
// import Landing from "./Landing";
import AsyncRoute from "./AsyncRoute";
// import Search from "./Search";
// import Details from "./Details";
import preload from "../data.json";

const Four04 = () => <h1>404</h1>;

// const Landing = React.lazy(() => import("./Landing"));

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Switch>
          {/* <Route
            exact
            path="/"
            component={props => {
              return (
                <Suspense fallback={<div>Loading...</div>}>
                  <Landing {...props} />
                </Suspense>
              );
            }}
          /> */}
          {/* <Route exact path="/" component={Landing} /> */}
          <Route
            exact
            path="/"
            component={props => {
              return (
                <AsyncRoute
                  props={props}
                  loadingPromise={() => {
                    return import("./Landing");
                  }}
                />
              );
            }}
          />
          {/* <Route
            path="/search"
            component={props => {
              return <Search shows={preload.shows} {...props} />;
            }}
          /> */}
          <Route
            path="/search"
            component={props => {
              return (
                <AsyncRoute
                  props={Object.assign({ shows: preload.shows }, props)}
                  loadingPromise={() => {
                    return import("./Search");
                  }}
                />
              );
            }}
          />
          {/* <Route
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
          /> */}
          <Route
            path="/details/:id"
            component={props => {
              return (
                <AsyncRoute
                  props={Object.assign(
                    {
                      show: preload.shows.find(show => {
                        return props.match.params.id === show.imdbID;
                      })
                    },
                    props
                  )}
                  loadingPromise={() => {
                    return import("./Details");
                  }}
                />
              );
            }}
          />
          <Route component={Four04} />
        </Switch>
      </div>
    </Provider>
  );
};

App.defaultProps = {
  match: {}
};

App.propTypes = {
  match: shape({
    params: string
  })
};

export default App;
