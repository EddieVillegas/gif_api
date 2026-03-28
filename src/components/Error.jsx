import PropTypes from 'prop-types'

const Error = ({message}) => (

    <div className="card-panel red center-align">

        <span className="white-text">
      
            {message}

        </span>
    
    </div>
            

)

Error.propTypes = {

    message: PropTypes.string.isRequired 

}

export default Error