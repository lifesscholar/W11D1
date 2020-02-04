import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from "../actions/pokemon_actions";

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      newState = Object.assign({},state, action.pokemon);
      return newState;
    case RECEIVE_POKEMON:
      const pokemon = action.pokemon.pokemon;
      newState = Object.assign({}, state, { [pokemon.id]: pokemon });
      return newState;
    default:
      return state;
  }
};


export default pokemonReducer;