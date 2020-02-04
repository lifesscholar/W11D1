import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// import { HashRouter, Route } from "react-router-dom";
import { receivePokemon, receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import { fetchAllPokemon,fetchPokemon } from './util/api_util';
// import {selectAllPokemon} from "./reducers/selectors";

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root'); 
  
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // window.receiveAllPokemon = receiveAllPokemon;
  // window.fetchAllPokemon = fetchAllPokemon;
  // window.requestAllPokemon = requestAllPokemon;
  // window.selectAllPokemon = selectAllPokemon;
  window.fetchPokemon = fetchPokemon;
  window.receivePokemon = receivePokemon;
  
  ReactDOM.render(<Root store={store}/>, root);
});