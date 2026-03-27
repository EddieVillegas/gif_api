import React, {useContext} from 'react'

import PropTypes from 'prop-types'

import {ModalContext} from '../context/ModalContext'

const GifItem = ({gifItem}) => {
    
    const {setGif} = useContext(ModalContext)

    const {title, images : {downsized : {url}}} = gifItem

    return (
        
        <div className="col s12 m7 l4">

            <div className="card">

                <div className="card-image">
                            
                    <img src={url} alt={title} width="250"/>
                         
                </div>

                <div className="card-action center-align">
                    
                    <a className="waves-effect waves-light btn modal-trigger" href="#modal" onClick={() => setGif({title, url})}>

                        View

                    </a>
                
                </div>

            </div>

        </div>

    )

}

GifItem.propTypes = {

    gifItem : PropTypes.object.isRequired

}

export default GifItem