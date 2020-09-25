import React from 'react'
import PokemonSearchList from '../../components/PokemonSearchList'
import Header from '../../components/Header'
import { useLocation } from 'react-router-dom'

import './styles.css'


function PokemonSearch(){

    const search = useLocation().search;
    const name = new URLSearchParams(search).get('name');
    
    return(
        <div id="pokemon-search">

            <Header>
                
                <h1> { name } </h1>
            </Header>


            <div className="container p-5">
                <PokemonSearchList name={ name }/>
            </div>
        </div>
        
    )
        
}


export default PokemonSearch
