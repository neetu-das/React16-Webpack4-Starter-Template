import React from "react";
import { connect } from "react-redux";
import { arrayOf, shape, string } from "prop-types";
import ShowCard from "./ShowCard";
import Header from "./Header";

const Search = ({ searchTerm, shows }) => {
  return (
    <div className="search">
      <Header showSearch />
      <div>
        {shows
          .filter(
            show =>
              `${show.title} ${show.description}`
                .toUpperCase()
                .indexOf(searchTerm.toUpperCase()) !== -1
          )
          .map(show => (
            <ShowCard key={show.imdbID} {...show} />
          ))}
      </div>
    </div>
  );
};

Search.defaultProps = {
  searchTerm: ""
};

Search.propTypes = {
  searchTerm: string,
  shows: arrayOf(
    shape({
      title: string.isRequired,
      description: string.isRequired
    })
  ).isRequired
};

const mapStateToProps = state => {
  return { searchTerm: state.searchTerm };
};

export const Unwrapped = Search;

export default connect(mapStateToProps)(Search);
