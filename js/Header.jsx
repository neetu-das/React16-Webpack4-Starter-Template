import React from "react";
import { connect } from "react-redux";
import { bool, func, string } from "prop-types";
import { Link } from "react-router-dom";
import { setSearchTerm } from "./actionCreators";

class Header extends React.Component {
  componentDidMount() {
    if (this.nameInput) {
      this.nameInput.focus();
    }
  }

  render() {
    const { searchTerm, showSearch, handleSearchTermChange } = this.props;
    let utilSpace;
    if (showSearch) {
      utilSpace = (
        <input
          ref={input => {
            this.nameInput = input;
          }}
          onChange={handleSearchTermChange}
          value={searchTerm}
          type="text"
          placeholder="Search"
        />
      );
    } else {
      utilSpace = (
        <h2>
          <Link to="/search">Back</Link>
        </h2>
      );
    }
    return (
      <header>
        <h1>
          <Link to="/"> funtimevideo </Link>
        </h1>
        {utilSpace}
      </header>
    );
  }
}

Header.defaultProps = {
  handleSearchTermChange: () => {},
  searchTerm: "",
  showSearch: false
};

Header.propTypes = {
  handleSearchTermChange: func,
  searchTerm: string,
  showSearch: bool
};

const mapStateToProps = state => {
  return { searchTerm: state.searchTerm };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSearchTermChange: event => {
      return dispatch(setSearchTerm(event.target.value));
    }
  };
};

export const UnwrappedHeader = Header;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
