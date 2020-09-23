import React from 'react'


import './styles.css'

function Table({ pokemon }){
    return(

        <div id="table">
            <div className="container">
                <div className="row">
                    <div className="col-sm bold">id</div>
                    <div className="col-sm">{pokemon.id}</div>
                </div>

                <div className="row">
                    <div className="col-sm bold">familyID</div>
                    <div className="col-sm">{pokemon.familyID}</div>
                </div>

                <div className="row">
                    <div className="col-sm bold">pokedexNumber</div>
                    <div className="col-sm">{pokemon.pokedexNumber}</div>
                </div>

                <div className="row">
                    <div className="col-sm bold">generation</div>
                    <div className="col-sm">{pokemon.generation}</div>
                </div>

                <div className="row">
                    <div className="col-sm bold">evolutionStage</div>
                    <div className="col-sm">{pokemon.evolutionStage}</div>
                </div>

                <div className="row">
                    <div className="col-sm bold">evolved</div>
                    <div className="col-sm">{pokemon.evolved}</div>
                </div>

                <div className="row">
                    <div className="col-sm bold">crossGen</div>
                    <div className="col-sm">{pokemon.crossGen}</div>
                </div>

                <div className="row">
                    <div className="col-sm bold">weather1</div>
                    <div className="col-sm">{pokemon.weather1}</div>
                </div>

                <div className="row">
                    <div className="col-sm bold">weather2</div>
                    <div className="col-sm">{pokemon.weather2}</div>
                </div>

                <div className="row">
                    <div className="col-sm bold">arquireable</div>
                    <div className="col-sm">{pokemon.arquireable}</div>
                </div>

                <div className="row">
                    <div className="col-sm bold">spawns</div>
                    <div className="col-sm">{pokemon.spawns}</div>
                </div>

                <div className="row">
                    <div className="col-sm bold">regional</div>
                    <div className="col-sm">{pokemon.regional}</div>
                </div>

                <div className="row">
                    <div className="col-sm bold">raidable</div>
                    <div className="col-sm">{pokemon.raidable}</div>
                </div>

                <div className="row">
                    <div className="col-sm bold">hatchable</div>
                    <div className="col-sm">{pokemon.hatchable}</div>
                </div>

                <div className="row">
                    <div className="col-sm bold">shiny</div>
                    <div className="col-sm">{pokemon.shiny}</div>
                </div>

                <div className="row">
                    <div className="col-sm bold">nest</div>
                    <div className="col-sm">{pokemon.nest}</div>
                </div>

                <div className="row">
                    <div className="col-sm bold">new</div>
                    <div className="col-sm">{pokemon.new}</div>
                </div>

                <div className="row">
                    <div className="col-sm bold">notGettable</div>
                    <div className="col-sm">{pokemon.notGettable}</div>
                </div>
                
                <div className="row">
                    <div className="col-sm bold">futureEvolve</div>
                    <div className="col-sm">{pokemon.futureEvolve}</div>
                </div>

                <div className="row">
                    <div className="col-sm bold">notGettable</div>
                    <div className="col-sm">{pokemon.notGettable}</div>
                </div>

                <div className="row">
                    <div className="col-sm bold">cp40</div>
                    <div className="col-sm">{pokemon.cp40}</div>
                </div>

                <div className="row">
                    <div className="col-sm bold">cp90</div>
                    <div className="col-sm">{pokemon.cp90}</div>
                </div>

            </div>
        </div>
    )
}


export default Table

/*
<table class="table">
            <thead>
                <tr>
                    
                    <th scope="col">ID</th>
                    <th scope="row">1</th>
                    <th scope="col">pokedexNumber</th>
                    <th scope="col">generation</th>
                    <th scope="col">evolutionStage</th>
                    <th scope="col">evolved</th>
                    <th scope="col">crossGen</th>
                    <th scope="col">weather1</th>
                    <th scope="col">weather2</th>
                    <th scope="col">arquireable</th>
                    <th scope="col">spawns</th>
                    <th scope="col">regional</th>
                    <th scope="col">raidable</th>
                    <th scope="col">hatchable</th>
                    <th scope="col">shiny</th>
                    <th scope="col">nest</th>
                    <th scope="col">new</th>
                    <th scope="col">notGettable</th>
                    <th scope="col">futureEvolve</th>
                    <th scope="col">futureEvolve</th>
                    <th scope="col">cp40</th>
                    <th scope="col">cp90</th>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>pokedexNumber</td>
                    <td>generation</td>
                    <td>evolutionStage</td>
                    <td>evolved</td>
                    <td>crossGen</td>
                    <td>weather1</td>
                    <td>weather2</td>
                    <td>arquireable</td>
                    <td>spawns</td>
                    <td>regional</td>
                    <td>raidable</td>
                    <td>hatchable</td>
                    <td>shiny</td>
                    <td>nest</td>
                    <td>new</td>
                    <td>notGettable</td>
                    <td>futureEvolve</td>
                    <td>futureEvolve</td>
                    <td>cp40</td>
                    <td>cp90</td>
                </tr>
            </thead>
        </table>
*/