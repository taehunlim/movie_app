import React from "react";
import PropTypes from "prop-types";

function Potato({favourite, picture, rating}) {
    return (
        <div>
            <h3>I like {favourite}</h3>
            <img src={picture} alt={favourite}/>
            <h4>{rating} / 5.0</h4>
        </div>
    );
}

Potato.propTypes = {
  favourite : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number
};


export default Potato;