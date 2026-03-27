import React from 'react'
import PropTypes from 'prop-types'

const Error = ({message}) => (

    <div class="card-panel red center-align">

        <span class="white-text">
      
            {message}

        </span>
    
    </div>
            

)

Error.propTypes = {

    message: PropTypes.string.isRequired 

}

export default Error