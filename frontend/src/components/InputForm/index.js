import React from 'react'

//import './styles.css'

function InputForm({ nameInput, name, ...rest}){
    return(  
        <div className="form-group">
            <label htmlFor={ nameInput }>{ nameInput }</label>
            <input type="text" className="form-control" id={ nameInput } name={ name } { ...rest }/>
        </div>             
    )
}

export default InputForm