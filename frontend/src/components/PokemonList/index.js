import React, { useState, useEffect } from 'react'
import PokemonItem from '../PokemonItem'
import api from '../../services/api'
import './styles.css'






const PokemonList = () => {
    
    const [pokemonInfo, setPokemonInfo ] = useState([])

   
    useEffect(() => { 
        const fetchPokemon = async () => {

            const response =  await api.get('/pokemons')

            setPokemonInfo(response.data.data)
        }

        fetchPokemon()

    }, [])

    return(
        <div className="container grid p-5 ">

            {pokemonInfo.map(pokemon => (
                    <PokemonItem
                        key={ pokemon.id } 
                        id = { pokemon.id }
                        name={ pokemon.name }
                        type1={ pokemon.type1 }
                        type2={pokemon.type2}
                        imageName={ pokemon.imgName }
                    />
                ))
            }
            
            
           
        </div>
    )
        
}

export default PokemonList
