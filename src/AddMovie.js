import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {

    const [movies, setMovies] = useContext(MovieContext)

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const updateName = (e) => {
        setName(e.target.value);
    }

    const updatePrice = (e) => {
        setPrice(e.target.value);
    }

    const updateDescription = (e) => {
        setDescription(e.target.value);
    }

    const addMovie = (e) => {
        e.preventDefault();
        setMovies((prevMovies) => [...prevMovies, {name: name, price: price, description: description}]);
    }

    return(
        <form className="AddMovie" onSubmit={addMovie}>
            <input type="text" name="name" placeholder="name" value={name} onChange={updateName}/>
            <input type="text" name="price" placeholder="price" value={price} onChange={updatePrice} />
            <textarea placeholder="description" rows="4" columns="50" 
            value={description} onChange={updateDescription}></textarea>
            <button>Submit</button>
        </form>
    );
}

export default AddMovie;