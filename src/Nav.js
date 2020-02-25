import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {

    const [movies, setMovies] = useContext(MovieContext);

    return(
        <div className="Nav">
            <h2>Book Vault</h2>
            <p>In Your Library: {movies.length}</p>
        </div>
    );
}

export default Nav;