import React from 'react'
import Pokeball from '../../assets/images/pokeball.svg'
import PokemonLogo from '../../assets/images/pokemonLogo.png'
import { Link } from 'react-router-dom'

import './styles.css'
function Header({ children }){
    return(
        <div id="header-container">
            <nav className="navbar  header-content p-5 navbar-light bg-danger">
                <Link to="/">
                    <img className=""src={ Pokeball }  width={ 150 } alt="pokebola"/>
                </Link>

                <img className="img-logo"src={ PokemonLogo } width={ 350 } alt="pokemon logo"/>
                
                { children }
            </nav>
            
        </div>
    )
}

export default Header