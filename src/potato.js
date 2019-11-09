import React from "react";

function Potato({favourite, picture}) {
    return (
        <div>
            <h3>I like {favourite}</h3>
            <img src={picture} />
        </div>
    );
}


export default Potato;