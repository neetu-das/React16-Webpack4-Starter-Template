import React, { Component } from "react";
import { string, shape } from "prop-types";
import axios from "axios";
import Header from "./Header";
import Spinner from "./Spinner";

// const Details = ({ show, match }) => {
class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: {
        rating: ""
      }
    };
  }

  componentDidMount() {
    const { show } = this.props;
    axios.get(`http://localhost:3000/${show.imdbID}`).then(response => {
      this.setState({ apiData: response.data });
    });
  }

  render() {
    const { apiData } = this.state;
    const { show, match } = this.props;
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
            src={`img/posters/${show.poster}`}
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

Details.propTypes = {
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

export default Details;
