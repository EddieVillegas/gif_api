import React from 'react'

import GifItem from './GifItem'

import PropTypes from 'prop-types'

const GifsList = ({gifList}) => {

    const gifListComponent = gifList.map(gif => <GifItem gifItem={gif} key={gif.id}/>)
    
    return(
        
        <div className="row">

            {gifListComponent}

        </div>
    )
}

GifsList.propTypes = {

    gifList : PropTypes.array.isRequired

}

export default GifsList