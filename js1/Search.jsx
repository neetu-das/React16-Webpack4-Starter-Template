import React from "react";
import { arrayOf, func, shape, string } from "prop-types";
import ShowCard from "./ShowCard";
import Header from "./Header";

const Search = ({ searchTerm, shows, handleSearchTermChange }) => {
  return (
    <div className="search">
      <Header
        searchTerm={searchTerm}
        showSearch
        handleSearchTermChange={handleSearchTermChange}
      />
      <div>
        {shows
          .filter(
            show =>
              `${show.title} ${show.description}`
                .toUpperCase()
                .indexOf(searchTerm.toUpperCase()) !== -1
          )
          .map(show => (
            // <ShowCard show={show} />
            <ShowCard key={show.imdbID} {...show} />
          ))}
      </div>
    </div>
  );
};

Search.defaultProps = {
  handleSearchTermChange: () => {},
  searchTerm: ""
};

Search.propTypes = {
  handleSearchTermChange: func,
  searchTerm: string,
  shows: arrayOf(
    shape({
      title: string.isRequired,
      description: string.isRequired
    })
  ).isRequired
};

export default Search;
