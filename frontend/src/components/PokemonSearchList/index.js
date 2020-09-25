import React, { useEffect, useState }from "react";
import PokemonItem from '../../components/PokemonItem'

import api from '../../services/api'


function PokemonSearchList({ name }){

    const [pokemonInfo, setPokemonInfo ] = useState([])
    const [results, setResults ] = useState([])

   
    useEffect(() => { 
        const fetchPokemon = async () => {

            const response =  await api.get(`/pokemons/s/search?name=${ name }`)

            setPokemonInfo(response.data.data)
            setResults(response.data.length)

        }

        fetchPokemon()

    })
    
    return(
        <div className="container grid p-5 ">

            { results > 0?pokemonInfo.map(pokemon => (
                    <PokemonItem
                        key={ pokemon.id } 
                        id = { pokemon.id }
                        name={ pokemon.name }
                        type1={ pokemon.type1 }
                        type2={pokemon.type2}
                        imageName={ pokemon.imgName }
                    />
                )): <h2>No results found</h2>
            }
        </div>
    )   
}

export default PokemonSearchList