import React from "react";
import { bool, func, string } from "prop-types";
import { Link } from "react-router-dom";

// const Header = ({ searchTerm, showSearch, handleSearchTermChange }) => {
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

export default Header;
