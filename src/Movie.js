import React from "react";
import PropTypes from "prop-types";

const Movie({ id, url, title, summary, year, poster }) => (
  return <h4>{title}</h4>;
);


Movie.propTypes = {
  id : PropTypes.number.isRequired,
  url : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  year : PropTypes.number.isRequired,
  poster : PropTypes.string.isRequired
};

export default Movie;