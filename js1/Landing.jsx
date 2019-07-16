/* eslint no-debugger:0 */
import React from "react";
import { func, shape, string } from "prop-types";
import { Link } from "react-router-dom";

// const Landing = ({ searchTerm, handleSearchTermChange }) => {
class Landing extends React.Component {
  componentDidMount() {
    if (this.nameInput) {
      this.nameInput.focus();
    }
  }

  render() {
    const {
      clearSearchTerm,
      searchTerm,
      handleSearchTermChange,
      history
    } = this.props;
    const goToSearch = event => {
      event.preventDefault();
      history.push("/search");
    };

    return (
      <div className="landing">
        <h1>funTimeVideos</h1>
        <form onSubmit={goToSearch}>
          <input
            ref={input => {
              this.nameInput = input;
            }}
            onChange={handleSearchTermChange}
            value={searchTerm}
            type="text"
            placeholder="Search"
          />
        </form>
        <Link to="/search" onClick={clearSearchTerm}>
          Or Browse All
        </Link>
      </div>
    );
  }
}

Landing.defaultProps = {
  clearSearchTerm: () => {},
  handleSearchTermChange: () => {},
  searchTerm: ""
};

Landing.propTypes = {
  clearSearchTerm: func,
  handleSearchTermChange: func,
  searchTerm: string,
  history: shape({
    push: func.isRequired
  }).isRequired
};

export default Landing;
