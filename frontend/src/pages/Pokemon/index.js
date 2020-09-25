import React, { useState } from 'react'
import PokemonList from '../../components/PokemonList'
import Header from '../../components/Header'
import { Link, useHistory } from 'react-router-dom'

import './styles.css'


function Pokemon(){
    
    
    const [ search, setSearch ] = useState('')

    
    const history = useHistory()

    async function handleSearch(e){
        e.preventDefault()
        history.push(`/search/?name=${ search.trim() }`)

    }
    return(
        <div id="pokemon">

            <Header>

               <form onSubmit={ handleSearch } >
                    <div className="search-pokemon">
                        <input 
                            placeholder="Search Pokemon"
                            className="form-control"
                            onChange= { e => setSearch(e.target.value)}
                        />
                        <button type="submit" className="btn btn-primary">
                            Search
                        </button>
                    </div>
                   
                </form>


                <Link className="button" to="/create">
                    <button className="btn btn-success">
                        Create a new Pokémon! 
                    </button>
                </Link>
                
            </Header>


            <div className="container p-5">
                <PokemonList/>
            </div>

            
        </div>
        
    )
        
}


export default Pokemon
