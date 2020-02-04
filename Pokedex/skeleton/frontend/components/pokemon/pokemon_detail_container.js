import { connect } from 'react-redux';
import { PokemonDetail } from './pokemon_detail';
import { requestSinglePokemon, requestAllPokemon } from '../../actions/pokemon_actions';

const mapStateToProps = state => {
  debugger;
  return {pokemon: state}; 
};

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (pokemonId) => dispatch(requestSinglePokemon(pokemonId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);