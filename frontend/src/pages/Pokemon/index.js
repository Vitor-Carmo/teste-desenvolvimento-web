import React from 'react'
import PokemonList from '../../components/PokemonList'
import Header from '../../components/Header'

import './styles.css'
function Pokemon(){
    return(
        <div id="pokemon">
            <Header>

                <form action="">
                    <div className="search-pokemon">
                        <input placeholder="Pesquisar Pokemon" className="form-control" />
                        <button type="submit" className="btn btn-primary mb-2">
                            Pesquisar
                        </button>
                    </div>
                </form>
                
                
            </Header>
            <div className="container p-5">
                <PokemonList />
            </div>
        </div>
        
    )
        
}


export default Pokemon
