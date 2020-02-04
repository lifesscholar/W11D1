import React from 'react';
import {PokemonIndexItem} from './pokemon_index_item';

export class PokemonIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    // debugger
    this.props.requestAllPokemon();
  }

  render (){
    const pokemonItems = this.props.pokemon.map(poke => (
      <PokemonIndexItem key={poke.id} pokemon={poke} />
    ));
    return (
      // <ul>
      //   {this.props.pokemon.map(pokemon => (
      //     <li key={pokemon.id}>
      //       <img width="50px" className="small-image" src={pokemon.image_url}></img>
      //       <br></br>
      //       {pokemon.name}
      //     </li>
      //   )) }
      // </ul>

      <section className="pokedex">
        <ul>{pokemonItems}</ul>
      </section>
    )
  };
}