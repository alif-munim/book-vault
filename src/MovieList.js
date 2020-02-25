import React, { useState, useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";



const MovieList = () => {

    const [movies, setMovies] = useContext(MovieContext);

    return(
        <div className="MovieList">
            {movies.map((movie) => (
                <Movie name={movie.name} description={movie.description} price={movie.price} id={movie.id}/>
            ))}
        </div>
    );
}

export default MovieList;