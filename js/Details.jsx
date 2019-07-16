import React, { Component } from "react";
import { connect } from "react-redux";
import { func, string, shape } from "prop-types";
import Header from "./Header";
import Spinner from "./Spinner";
import { getApiDetails } from "./actionCreators";

class Details extends Component {
  componentDidMount() {
    // const { dispatch, show } = this.props;
    // axios.get(`http://localhost:3000/${show.imdbID}`).then(response => {
    //   dispatch(addApiData({ rating: response.data.rating }));
    // });
    // const { handleApiData, show } = this.props;
    // axios.get(`http://localhost:3000/${show.imdbID}`).then(response => {
    //   handleApiData({ rating: response.data.rating });
    // });
    const { handleApiData } = this.props;
    handleApiData();
  }

  render() {
    const { apiData, show, match } = this.props;
    let ratingComponent;
    if (apiData.rating) {
      ratingComponent = <h3>{apiData.rating}</h3>;
    } else {
      ratingComponent = <Spinner />;
    }
    return (
      <div className="details">
        <Header />
        <section>
          <h1>{show.title}</h1>
          <h2>({show.year})</h2>
          {ratingComponent}
          <img
            alt={`${show.title} Show Poster`}
            src={`/assets/img/posters/${show.poster}`}
          />
          <p>{show.description}</p>
          <h1>{show.trailer}</h1>
          <h1>{match.params.id}</h1>
        </section>
        <div>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${show.trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder="0"
            allowFullScreen
            title={`Trailer for ${show.title}`}
          />
        </div>
      </div>
    );
  }
}

Details.defaultProps = {
  apiData: shape({
    rating: ""
  })
};

Details.propTypes = {
  apiData: shape({
    rating: string
  }),
  handleApiData: func.isRequired,
  show: shape({
    title: string.isRequired,
    description: string.isRequired
  }).isRequired,
  match: shape({
    params: shape({
      id: string.isRequired
    })
  }).isRequired
};

// const mapStateToProps = state => {
//   return {
//     apiData: state.apiData
//   };
// };
const mapStateToProps = (state, ownProps) => {
  const apiData = state.apiData[ownProps.show.imdbID]
    ? state.apiData[ownProps.show.imdbID]
    : {};
  return {
    apiData
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     handleApiData: val => {
//       return dispatch(addApiData(val));
//     }
//   };
// };
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleApiData: () => {
      return dispatch(getApiDetails(ownProps.show.imdbID));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
