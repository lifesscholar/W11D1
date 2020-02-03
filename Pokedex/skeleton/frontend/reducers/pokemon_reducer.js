import { RECEIVE_ALL_POKEMON } from "../actions/pokemon_actions";

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  debugger;
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      debugger;
      const newState = Object.assign({},state, action.pokemon);
      return newState;
    default:
      return state;
  }
};


export default pokemonReducer;