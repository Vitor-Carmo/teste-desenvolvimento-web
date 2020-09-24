import React from 'react'
import Type from '../Type/'
import { FormatedNumber } from '../../utils/utils'
import Trash from '../../assets/images/trash.svg'
import Edit from '../../assets/images/edit.svg'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'

import './styles.css'



function PokemonItem({ id, name, type1, type2, imageName }){

    const history = useHistory();

    async function onDelete(){
        
        try {
            const response  = await api.delete(`/pokemons/delete/${id}`)
            alert(response.data.message)
            history.push('/')
        }catch(err){
            alert('Erro ao tentar deletar o pokemon')
            console.log(err)
        }

    }


    return(

        <div className="card p-2">
            <Link to={`/pokemon/${ id }`}>
                <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${ FormatedNumber(imageName) }.png`} 
                    className="card-img-top img-fluid animation img" alt={ name }
                />
            </Link>
            
            <div className="card-body">
                <h3 className="card-title">{ name }</h3>
                <div className="types-pokemon">
                    <Type typeName={ type1 } />
                    <Type typeName={ type2 } />
                </div>

                <div className="delete-update-container">
                <Link to={`/update/${ id }`}>
                    <img src={ Edit } alt="Deletar" width={ 38 }/>
                </Link>
                <button onClick={ onDelete }>
                    <img src={ Trash } alt="Deletar" width={ 38 }/>
                </button>
                    
                </div>
                
            </div>
        </div>  
     
    )

           
}




export default PokemonItem
