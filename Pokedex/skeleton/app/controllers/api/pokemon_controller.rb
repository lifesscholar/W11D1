class Api::PokemonController < ApplicationController

  def index
    @pokemons = Pokemon.all
    render :index
    # render :json
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    render :show
    # render :json
  end

end

