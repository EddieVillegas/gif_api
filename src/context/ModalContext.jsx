import React, {createContext, useState} from 'react'

export const ModalContext = createContext()

const ModalProvider = props => {

    const [gif, setGif] = useState({})

    return(

        <ModalContext.Provider
            value={{
                gif,
                setGif
            }}
        >
            
            {props.children}

        </ModalContext.Provider>
    
    )

}

export default ModalProvider