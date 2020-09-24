import React, { useState } from 'react'
import Header from '../../components/Header'
import InputForm from '../../components/InputForm'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'

import './styles.css'

function PokemonCreate(){

    const [id,  setid] = useState(1000)
    const [name,  setname] = useState('')
    const [pokedexNumber,  setpokedexNumber] = useState(0)
    const [imgName,  setimgName] = useState('')
    const [generation,  setgeneration] = useState('')
    const [evolutionStage,  setevolutionStage] = useState('')
    const [evolved,  setevolved] = useState('')
    const [familyID,  setfamilyID] = useState('')
    const [crossGen,  setcrossGen] = useState('')
    const [type1,  settype1] = useState('')
    const [type2,  settype2] = useState('')
    const [weather1,  setweather1] = useState('')
    const [weather2,  setweather2] = useState('')
    const [statTotal,  setstatTotal] = useState('')
    const [atk,  setatk] = useState('')
    const [def,  setdef] = useState('')
    const [sta,  setsta] = useState('')
    const [legendary,  setlegendary] = useState('')
    const [arquireable,  setarquireable] = useState('')
    const [spawns,  setspawns] = useState('')
    const [regional,  setregional] = useState('')
    const [raidable,  setraidable] = useState('')
    const [hatchable,  sethatchable] = useState('')
    const [shiny,  setshiny] = useState('')
    const [nest,  setnest] = useState('')
    const [New,  setnew] = useState('')
    const [notGettable,  setnotGettable] = useState('')
    const [futureEvolve,  setfutureEvolve] = useState('')
    const [cp40,  setcp40] = useState('')
    const [cp90,  setcp90] = useState('')

    const history = useHistory()

    async function handleRegister(e){
        e.preventDefault()

        const data = {
            id: Number(id),
            name: name,
            pokedexNumber: Number(pokedexNumber),
            imgName: imgName,
            generation: generation,
            evolutionStage: evolutionStage,
            evolved: evolved,
            familyID: familyID,
            crossGen: crossGen,
            type1: type1,
            type2: type2,
            weather1: weather1,
            weather2: weather2,
            statTotal: statTotal,
            atk: atk,
            def: def,
            sta: sta,
            legendary: legendary,
            arquireable: arquireable,
            spawns: spawns,
            regional: regional,
            raidable: raidable,
            hatchable: hatchable,
            shiny: shiny,
            nest: nest,
            new: New,
            notGettable: notGettable,
            futureEvolve: futureEvolve,
            cp40: cp40,
            cp90: cp90,
          }
        
        try{
            
            const response = await api.post('/pokemons/create', data);

            alert(response.data.menssage);

            history.push('/'); 

        } catch(err){
            alert('Erro no cadastro, tente novamente.')
        }
    }

    return(
        <div id="pokemon-create-container">
            <Header/>
            <div className="container p-5">
                <form onSubmit={ handleRegister }>
                    <h1>Create Pokémon</h1>
                    <InputForm 
                        onChange={ e => setid(e.target.value)}
                        nameInput="id" />
                    <InputForm 
                        onChange={ e => setname(e.target.value) }
                        nameInput="Name" />
                        
                    <InputForm 
                        onChange={ e => setpokedexNumber(e.target.value)}
                        nameInput="Pokedex Number" />
                        
                    <InputForm 
                        onChange={ e => setimgName(e.target.value)}
                        nameInput="Image Name" />
                        
                    <InputForm 
                        onChange={ e => setgeneration(e.target.value)}
                        nameInput="Generation" />
                        
                    <InputForm 
                        onChange={ e => setevolutionStage(e.target.value)}
                        nameInput="Evolution Stage" />
                        
                    <InputForm 
                        onChange={ e => setevolved(e.target.value)}
                        nameInput="Evolved" />
                        
                    <InputForm 
                        onChange={ e => setfamilyID(e.target.value)}
                        nameInput="Family ID" />
                        
                    <InputForm 
                        onChange={ e => setcrossGen(e.target.value)}
                        nameInput="Cross Gen" />
                        
                    <InputForm 
                        onChange={ e => settype1(e.target.value)}
                        nameInput="Type 1" />
                        
                    <InputForm 
                        onChange={ e => settype2(e.target.value)}
                        nameInput="Type 2" />
                        
                    <InputForm 
                        onChange={ e => setweather1(e.target.value)}
                        nameInput="Weather 1" />
                        
                    <InputForm 
                        onChange={ e => setweather2(e.target.value)}
                        nameInput="Weather 2" />
                        
                    <InputForm 
                        onChange={ e => setstatTotal(e.target.value)}
                        nameInput="Stat Total" />
                        
                    <InputForm 
                        onChange={ e => setatk(e.target.value)}
                        nameInput="Attack" />
                        
                    <InputForm 
                        onChange={ e => setdef(e.target.value)}
                        nameInput="Defese" />
                        
                    <InputForm 
                        onChange={ e => setsta(e.target.value)}
                        nameInput="Sta" />
                        
                    <InputForm 
                        onChange={ e => setlegendary(e.target.value)}
                        nameInput="Legendary" />
                        
                    <InputForm 
                        onChange={ e => setarquireable(e.target.value)}
                        nameInput="Arquireable" />
                        
                    <InputForm 
                        onChange={ e => setspawns(e.target.value)}
                        nameInput="Spawns" />
                        
                    <InputForm 
                        onChange={ e => setregional(e.target.value)}
                        nameInput="Regional" />
                        
                    <InputForm 
                        onChange={ e => setraidable(e.target.value)}
                        nameInput="Raidable" />
                        
                    <InputForm 
                        onChange={ e => sethatchable(e.target.value)}
                        nameInput="HatChable" />
                        
                    <InputForm 
                        onChange={ e => setshiny(e.target.value)}
                        nameInput="Shiny" />
                        
                    <InputForm 
                        onChange={ e => setnest(e.target.value)}
                        nameInput="Nest" />
                        
                    <InputForm 
                        onChange={ e => setnew(e.target.value)}
                        nameInput="New" />
                        
                    <InputForm 
                        onChange={ e => setnotGettable(e.target.value)}
                        nameInput="Not Gettable" />
                        
                    <InputForm 
                        onChange={ e => setfutureEvolve(e.target.value)}
                        nameInput="Future Evolve" />
                        
                    <InputForm 
                        onChange={ e => setcp40(e.target.value)}
                        nameInput="CP 40" />
                        
                    <InputForm 
                        onChange={ e => setcp90(e.target.value)}
                        nameInput="CP 90" />
                        
                  
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default PokemonCreate
