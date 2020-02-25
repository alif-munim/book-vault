import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {

    const [movies, setMovies] = useState([
        {
            name: "Hitchhiker's Guide",
            description: "A ridiculous trip around our galaxy.",
            price: "$10",
            id: 23124
        },
        {
            name: "Great Gatsby",
            description: "The tragedies of love.",
            price: "$10",
            id: 2566124
        },
        {
            name: "Catcher In The Rye",
            description: "A coming of age story.",
            price: "$10",
            id: 23524
        }
    ]);

    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}