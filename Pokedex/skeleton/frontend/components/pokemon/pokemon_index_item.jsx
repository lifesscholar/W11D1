import React from 'react';
import { Link } from "react-router-dom";

export const PokemonIndexItem = ({pokemon}) => {
  // debugger
  return (
    <li>
      <Link to={`/pokemon/${pokemon.id}`}>
        <img width="50px" className="small-image" src={pokemon.image_url}></img>
        <br></br>
        {pokemon.name}
      </Link>
    </li>
  )
}