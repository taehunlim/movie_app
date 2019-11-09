import React from "react";
import PropTypes from "prop-types";

function Movie({ id, url, title, summary, year, poster }) {
  return (
      <div>
          <h4>{title}</h4>
          <h2>{year}</h2>
          <h6>{summary}</h6>
      </div>

  );
};


Movie.propTypes = {
  id : PropTypes.number.isRequired,
  url : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  year : PropTypes.number.isRequired,
  poster : PropTypes.string.isRequired
};

export default Movie;