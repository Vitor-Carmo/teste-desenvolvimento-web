import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Pokemon from './pages/Pokemon'
import PokemonShow from './pages/PokemonShow'

function Routers() {
    
    return (
        <BrowserRouter>
            <Route path="/" exact component={ Pokemon } />
            <Route path="/pokemon/:id" exact component={ PokemonShow } />
        </BrowserRouter>
    )
}


export default Routers