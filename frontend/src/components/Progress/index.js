import React from 'react'

import { PorcentProgress } from '../../utils/utils'

import './styles.css'
function Progress({ data }) {

    
    return(
        <div className="progress-container">
                    <h4>Max CP</h4>
                    <div className="progress">
                        <div role="progressbar" className="progress-bar bg-info progress-bar-striped progress-bar-animated" aria-valuenow="981" aria-valuemin="0" aria-valuemax="5000" style={{width: `${PorcentProgress(data.cp40, 5000)}%`}}>

                            { data.cp40 }

                        </div>
                    </div>
                    
                    <h4>Attack</h4>
                    <div class="progress">
                        <div role="progressbar" className="progress-bar bg-danger progress-bar-striped progress-bar-animated" aria-valuenow="118" aria-valuemin="0" aria-valuemax="1000" style={{width: `${PorcentProgress(data.atk, 1000)}%` }}>

                            { data.atk }

                        </div>
                    </div>

                    <h4>Defense</h4>
                    <div className="progress">
                        <div role="progressbar" className="progress-bar progress-bar-striped progress-bar-animated" aria-valuenow="118" aria-valuemin="0" aria-valuemax="1000" style={{width: `${PorcentProgress(data.def, 1000)}%`}}>

                            { data.def }

                        </div>
                    </div>

                    <h4>Stamina</h4>
                    <div className="progress">
                        <div role="progressbar" className="progress-bar bg-success progress-bar-striped progress-bar-animated" aria-valuenow="90" aria-valuemin="0" aria-valuemax="1000" style={{width: `${PorcentProgress(data.sta, 1000)}%` }}>

                            { data.sta }

                        </div>
                    </div>

            </div>


    )
}


export default Progress