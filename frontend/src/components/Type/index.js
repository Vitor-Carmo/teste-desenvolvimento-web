import React from 'react'
import  { FirstLetterUppercase }  from '../../utils/utils'
import './styles.css'

function Type({ typeName }){

    const colors = {
        bug:"#ABBF0C",
        dark:"#755544",
        dragon:"#7757F0",
        electric:"#FBD025",
        fairy:"#EA92F0",
        fighting:"#B65544",
        fire:"#F74221",
        flying:"#878EFA",
        ghost:"#675FBD",
        grass:"#7FD04F",
        ground:"#DABE50",
        ice:"#72C9FF",
        normal:"#AAAB99",
        poison:"#A64F9A",
        psychic:"#F84D9A",
        rock:"#ABBF0C",
        steel:"#AAA9BB",
        water:"#4492FF",
    }
    
    if(!typeName){
        return <span></span> 
    }
    
    return(
        <div className="type" style={{ backgroundColor:colors[typeName]}}>
            <span>{ FirstLetterUppercase(typeName) }</span>
        </div>
    )
    
    
}


export default Type