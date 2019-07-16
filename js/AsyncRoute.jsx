/* eslint react/prop-types:0 */
import React, { Component } from "react";
import { func } from "prop-types";
import Spinner from "./Spinner";

class AsyncRoute extends Component {
  state = {
    loaded: false
  };

  component = null;

  componentDidMount() {
    const { loadingPromise } = this.props;
    loadingPromise().then(module => {
      this.component = module.default;
      this.setState({ loaded: true });
    });
  }

  render() {
    const { loaded } = this.state;
    const { props } = this.props;
    if (loaded) {
      return <this.component {...props} />;
    }
    return <Spinner />;
  }
}

AsyncRoute.propTypes = {
  loadingPromise: func.isRequired
};

export default AsyncRoute;
