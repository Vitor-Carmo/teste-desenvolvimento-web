import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import InputForm from '../../components/InputForm'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'

import './styles.css'

function PokemonUpdate(props){

    const id_url = props.match.params.id

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

    const history = useHistory();

    async function handleUpdate(e){
        e.preventDefault();

        const data = {
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
            
            const response = await api.put(`/pokemons/update/${id_url}`, data);

            alert(response.data.message);

            history.push('/'); 

        } catch(err){
            console.log(err)
            alert('Erro no cadastro, tente novamente.')
            
        }
    }


    const [pokemon,  setPokemon] = useState([])


    useEffect(()=>{
        const fetchPokemonData = async () => {
            const response  = await api.get(`/pokemons/${id_url}`)

            setPokemon(response.data.data[0])

            setid(pokemon.id)
            setname(pokemon.name)
            setpokedexNumber(pokemon.pokedexNumber)
            setimgName(pokemon.imgName)
            setgeneration(pokemon.generation)
            setevolutionStage(pokemon.evolutionStage)
            setevolved(pokemon.evolved)
            setfamilyID(pokemon.familyID)
            setcrossGen(pokemon.crossGen)
            settype1(pokemon.type1)
            settype2(pokemon.type2)
            setweather1(pokemon.weather1)
            setweather2(pokemon.weather2)
            setstatTotal(pokemon.statTotal)
            setatk(pokemon.atk)
            setdef(pokemon.def)
            setsta(pokemon.sta)
            setlegendary(pokemon.legendary)
            setarquireable(pokemon.arquireable)
            setspawns(pokemon.spawns)
            setregional(pokemon.regional)
            setraidable(pokemon.raidable)
            sethatchable(pokemon.hatchable)
            setshiny(pokemon.shiny)
            setnest(pokemon.nest)
            setnew(pokemon.new)
            setnotGettable(pokemon.notGettable)
            setfutureEvolve(pokemon.futureEvolve)
            setcp40(pokemon.cp40)
            setcp90(pokemon.cp90)
        }

        fetchPokemonData()
    },)

   

    return(
        <div id="pokemon-create-container">
            <Header/>
            <div className="container p-5">
                <form onSubmit={ handleUpdate }>
                    <h1>Update Pokémon</h1>
                   
                    <InputForm
                        value={ id } 
                        onChange={ e => setname(e.target.value) }
                        nameInput="Id" />

                    <InputForm
                        value={name} 
                        onChange={ e => setname(e.target.value) }
                        nameInput="Name" />
                        
                    <InputForm
                        value={pokedexNumber} 
                        onChange={ e => setpokedexNumber(e.target.value)}
                        nameInput="Pokedex Number" />
                        
                    <InputForm
                        value={imgName} 
                        onChange={ e => setimgName(e.target.value)}
                        nameInput="Image Name" />
                        
                    <InputForm
                        value={generation} 
                        onChange={ e => setgeneration(e.target.value)}
                        nameInput="Generation" />
                        
                    <InputForm
                        value={evolutionStage} 
                        onChange={ e => setevolutionStage(e.target.value)}
                        nameInput="Evolution Stage" />
                        
                    <InputForm
                        value={evolved} 
                        onChange={ e => setevolved(e.target.value)}
                        nameInput="Evolved" />
                        
                    <InputForm
                        value={familyID} 
                        onChange={ e => setfamilyID(e.target.value)}
                        nameInput="Family ID" />
                        
                    <InputForm
                        value={crossGen} 
                        onChange={ e => setcrossGen(e.target.value)}
                        nameInput="Cross Gen" />
                        
                    <InputForm
                        value={type1} 
                        onChange={ e => settype1(e.target.value)}
                        nameInput="Type 1" />
                        
                    <InputForm
                        value={type2} 
                        onChange={ e => settype2(e.target.value)}
                        nameInput="Type 2" />
                        
                    <InputForm
                        value={weather1} 
                        onChange={ e => setweather1(e.target.value)}
                        nameInput="Weather 1" />
                        
                    <InputForm
                        value={weather2} 
                        onChange={ e => setweather2(e.target.value)}
                        nameInput="Weather 2" />
                        
                    <InputForm
                        value={statTotal} 
                        onChange={ e => setstatTotal(e.target.value)}
                        nameInput="Stat Total" />
                        
                    <InputForm
                        value={atk} 
                        onChange={ e => setatk(e.target.value)}
                        nameInput="Attack" />
                        
                    <InputForm
                        value={def} 
                        onChange={ e => setdef(e.target.value)}
                        nameInput="Defese" />
                        
                    <InputForm
                        value={sta} 
                        onChange={ e => setsta(e.target.value)}
                        nameInput="Sta" />
                        
                    <InputForm
                        value={legendary} 
                        onChange={ e => setlegendary(e.target.value)}
                        nameInput="Legendary" />
                        
                    <InputForm
                        value={arquireable} 
                        onChange={ e => setarquireable(e.target.value)}
                        nameInput="Arquireable" />
                        
                    <InputForm
                        value={spawns} 
                        onChange={ e => setspawns(e.target.value)}
                        nameInput="Spawns" />
                        
                    <InputForm
                        value={regional} 
                        onChange={ e => setregional(e.target.value)}
                        nameInput="Regional" />
                        
                    <InputForm
                        value={raidable} 
                        onChange={ e => setraidable(e.target.value)}
                        nameInput="Raidable" />
                        
                    <InputForm
                        value={hatchable} 
                        onChange={ e => sethatchable(e.target.value)}
                        nameInput="HatChable" />
                        
                    <InputForm
                        value={shiny} 
                        onChange={ e => setshiny(e.target.value)}
                        nameInput="Shiny" />
                        
                    <InputForm
                        value={nest} 
                        onChange={ e => setnest(e.target.value)}
                        nameInput="Nest" />
                        
                    <InputForm
                        value={New} 
                        onChange={ e => setnew(e.target.value)}
                        nameInput="New" />
                        
                    <InputForm
                        value={notGettable} 
                        onChange={ e => setnotGettable(e.target.value)}
                        nameInput="Not Gettable" />
                        
                    <InputForm
                        value={futureEvolve} 
                        onChange={ e => setfutureEvolve(e.target.value)}
                        nameInput="Future Evolve" />
                        
                    <InputForm
                        value={cp40} 
                        onChange={ e => setcp40(e.target.value)}
                        nameInput="CP 40" />
                        
                    <InputForm
                        value={cp90} 
                        onChange={ e => setcp90(e.target.value)}
                        nameInput="CP 90" />
                        
                  
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default PokemonUpdate

/*

name
pokedexNumber
imgName
generation
evolutionStage
evolved
familyID
crossGen
type1
type2
weather1
weather2
statTotal
atk
def
sta
legendary
arquireable
spawns
regional
raidable
hatchable
shiny
nest
new
notGettable
futureEvolve
cp40
cp90
*/