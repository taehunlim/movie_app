import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, url, title, summary, year, poster }) {
  return (
      <div className="movie">
          <img src={poster} alt={title} title={title} />
          <div>
              <h3 className="movie__title">{title}</h3>
              <h5 className="movie__year">{year}</h5>
              <h6>{summary}</h6>
          </div>
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