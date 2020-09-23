import React from 'react'
import Type from '../Type/'
import { FormatedNumber } from '../../utils/utils'
import Trash from '../../assets/images/trash.svg'
import Edit from '../../assets/images/edit.svg'

import './styles.css'

function PokemonItem({ name, type1, type2, imageName }){


    return(

        <div className="card p-2">
            <a href="/">
                <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${ FormatedNumber(imageName) }.png`} 
                    className="card-img-top img-fluid animation img" alt={ name }
                />
            </a>
            
            <div className="card-body">
                <h3 className="card-title">{ name }</h3>
                <div className="types-pokemon">
                    <Type typeName={ type1 } />
                    <Type typeName={ type2 } />
                </div>

                <div className="delete-update-container">
                    <img src={ Edit } alt="Deletar" width={ 38 }/>
                    <img src={ Trash } alt="Deletar" width={ 38 }/>
                </div>
                
            </div>
        </div>  
     
    )

           
}




export default PokemonItem


//https://assets.pokemon.com/assets/cms2/img/pokedex/detail/386-defense.png