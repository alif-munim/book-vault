import React from "react";

const Movie = ({name, description, price}) => {

    return(
        <div className="Movie" >
            <p>{price}</p>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Movie;