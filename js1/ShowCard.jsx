import React from "react";
import { string } from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

// const Wrapper = styled.div`
const Wrapper = styled(Link)`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
  color: black;
  text-decoration: none;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

// const ShowCard = ({ title, poster, year, description, imdbID }) => {
class ShowCard extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { title, poster, year, description, imdbID } = this.props;
    return (
      // <div className="show-card">
      <Wrapper to={`/details/${imdbID}`}>
        <Image alt={`${title} Show Poster`} src={`img/posters/${poster}`} />
        <div>
          <h3>{title}</h3>
          <h4>({year})</h4>
          <p>{description}</p>
          <p>{imdbID}</p>
        </div>
      </Wrapper>
      // </div>
    );
  }
}

// ShowCard.propTypes = {
//   show: shape({
//     poster: string,
//     title: string.isRequired,
//     year: string.isRequired,
//     description: string.isRequired
//   }).isRequired
// };
ShowCard.defaultProps = {
  poster: "ABC"
};
ShowCard.propTypes = {
  poster: string,
  title: string.isRequired,
  year: string.isRequired,
  description: string.isRequired,
  imdbID: string.isRequired
};

export default ShowCard;
