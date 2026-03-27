import React, {useContext} from 'react'
import {ModalContext} from '../context/ModalContext'

const Modal = () =>  {

    const {gif, setGif} = useContext(ModalContext)
    
    const {title = 'no title', url = ''} = gif
    
    const close = () => {
        
        setGif({})

    }
    
    return(

        <div id="modal" className="modal modal-fixed-footer">
        
            <div className="modal-content">
                
                <h4 className="center-align">{title.toUpperCase()}</h4>

                <div className="row">

                    <div className="col s12 m12">
                        
                        <div className="card">
                            
                            <div className="card-image">

                                <img className="materialboxed" data-caption="A picture of a way with a group of trees in a park" width="650" src={url} alt={title}/>
                            
                            </div>
                            
                            <div className="card-action center-align">

                                <a href={url} rel="noopener noreferrer" target="_blank">
                                    Link
                                </a>
                            
                            </div>
                        
                        </div>
                    
                    </div>
                
                </div>
            
            </div>
            
            <div className="modal-footer">
                
                <a href="#!" className="modal-close waves-effect waves-green btn-flat" onClick={close}>
                    
                    Close
               
                </a>
            
            </div>
    
        </div>
    )

}

export default Modal