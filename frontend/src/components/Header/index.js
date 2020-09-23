import React from 'react'
import Pokeball from '../../assets/images/pokeball.svg'
import PokemonLogo from '../../assets/images/pokemonLogo.png'
import './styles.css'
function Header({ children }){
    return(
        <div id="header-container">
            <nav className="navbar  header-content p-5 navbar-light bg-danger">
                <img className="img-logo"src={ Pokeball }  width={ 150 } alt="pokebola"/>
                <img className="img-logo"src={ PokemonLogo } width={ 350 } alt="pokemon logo"/>
                
                { children }
            </nav>
            
        </div>
    )
}

export default Header