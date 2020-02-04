import { RECEIVE_POKEMON } from "../actions/pokemon_actions";

const itemReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};

  switch (action.type) {
    case RECEIVE_POKEMON:
      debugger
      const items = action.pokemon.items;

      newState = Object.assign({}, state, items);
      return newState;
    default:
      return state;
  }
};

export default itemReducer;