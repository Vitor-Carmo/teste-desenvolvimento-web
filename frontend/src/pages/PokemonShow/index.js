import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import PokemonItem from '../../components/PokemonItem'
import Progress from '../../components/Progress'
import Table from '../../components/Table'

import api from '../../services/api'

import './styles.css'

function PokemonShow(props){

    const id = props.match.params.id

    const [ thisPokemon, setThisPokemon ] = useState([])

    useEffect(()=>{
        const fetchPokemon = async () =>{
            
        
            const response =  await api.get(`/pokemons/${ id  }`)
            
            setThisPokemon(response.data.data[0])

        }
        
        fetchPokemon()

    })

    

    return(
        <div id="pokemon-show-container">
            <Header/>
            <div className="container p-3">
                <div className=" grid-container ">
                    <div className="pokemon">
                        <PokemonItem
                            id = {thisPokemon.id }
                            name={thisPokemon.name}
                            type1={thisPokemon.type1}
                            type2={thisPokemon.type2}
                            imageName={thisPokemon.imgName}
                        />
                    </div>

                    <div className="table_">
                        <Table pokemon ={ thisPokemon } />

                    </div>
                    
                    <div className="progress_">
                        <Progress  data = {thisPokemon} />
                    </div>
                    
                    
                </div>
            </div>
            
            
            
        </div>
        
    )
}




export default PokemonShow

