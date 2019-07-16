/* eslint no-debugger:0 */
import React from "react";
import { connect } from "react-redux";
import { func, shape, string } from "prop-types";
import { Link } from "react-router-dom";
import { setSearchTerm } from "./actionCreators";

/* if we dont pass mapDispatchToProps as second argument to connect() 
then also  connect() or redux provide dispatch as props and we can use 
it like below as event handler. dispatch can then dispatch an action to
store via actioncreator */
// const Landing = ({ searchTerm, dispatch }) => {
//   debugger;
//   return (
//     <div className="landing">
//       <h1>funTimeVideos</h1>
//       <input
//         onChange={event => dispatch(setSearchTerm(event.target.value))}
//         value={searchTerm}
//         type="text"
//         placeholder="Search"
//       />
//       <Link to="/search">Or Browse All</Link>
//     </div>
//   );
// };
/* ======end */

const Landing = ({
  clearSearchTerm,
  searchTerm,
  handleSearchTermChange,
  history
}) => {
  const goToSearch = event => {
    event.preventDefault();
    history.push("/search");
  };

  return (
    <div className="landing">
      <h1>funTimeVideos</h1>
      <form onSubmit={goToSearch}>
        <input
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
};

Landing.defaultProps = {
  clearSearchTerm: () => {},
  searchTerm: ""
};

// Landing.propTypes = {
//   searchTerm: string,
//   dispatch: func.isRequired
// };

Landing.propTypes = {
  clearSearchTerm: func,
  searchTerm: string,
  handleSearchTermChange: func.isRequired,
  history: shape({
    push: func.isRequired
  }).isRequired
};

const mapStateToProps = state => {
  return { searchTerm: state.searchTerm };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSearchTermChange: event => {
      dispatch(setSearchTerm(event.target.value));
    },
    clearSearchTerm: () => {
      dispatch(setSearchTerm(""));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
