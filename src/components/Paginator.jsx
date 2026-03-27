import React from 'react'

import PropTypes from 'prop-types'

const Paginator = ({backPage, nextPage, showBackButton, showNextButton}) => (

    <div className="row">

        <div className="input-field col s6">
        
        <div className="left-align">

            { showBackButton ? null : <a href="#!" className="waves-effect waves-light btn" onClick={backPage}> &laquo; Back </a>}

        </div>
    
        </div> 
        
        <div className="input-field col s6">

        <div className="right-align">

            { showNextButton ? null : <a href="#!" className="waves-effect waves-light btn" onClick={nextPage}>Next &raquo;</a>}

        </div>
        
        </div>
        
    </div>

)

Paginator.propTypes = {

    backPage : PropTypes.func.isRequired, 
    
    nextPage : PropTypes.func.isRequired,
    
    showBackButton : PropTypes.bool.isRequired,
    
    showNextButton : PropTypes.bool.isRequired

}

export default Paginator