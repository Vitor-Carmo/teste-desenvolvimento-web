import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Pokemon from './pages/Pokemon'
import PokemonShow from './pages/PokemonShow'
import PokemonCreate from './pages/PokemonCreate'
import PokemonUpdate from './pages/PokemonUpdate'
import PokemonSearch from './pages/PokemonSearch'

function Routers() {
    
    return (
        <BrowserRouter>
            <Route exact path="/"  component={ Pokemon } />
            <Route exact path="/pokemon/:id"  component={ PokemonShow } />
            <Route exact path="/create"  component={ PokemonCreate } />
            <Route exact path="/update/:id"  component={ PokemonUpdate } />
            <Route exact path="/search/"  component={ PokemonSearch } />
        </BrowserRouter>
    )
}


export default Routers