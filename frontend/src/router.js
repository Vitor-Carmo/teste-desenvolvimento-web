import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Pokemon from './pages/Pokemon'

function Routers() {
    
    return (
        <BrowserRouter>
            <Route path="/" exact component={ Pokemon } />
        </BrowserRouter>
    )
}


export default Routers