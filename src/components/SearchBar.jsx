import React from 'react'

import styles from './SearchBar.module.css'

import PropTypes from 'prop-types'

const Form = ({setName}) => {

    const handleChange = (e) => {
        
        const {target : {value}} = e
        
        setName(value)

    }

    return (

        <section className={`${styles.search} row`}>

            <div className="col s12 m8 offset-m2">

                <form>

                    <div className="input-field col-s12">

                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            className={`${styles.search__input} autocomplete`}
                            id="autocomplete-input"
                        />

                        <label htmlFor="autocomplete-input">Please search a gif...</label>

                    </div>

                </form>

            </div>

        </section>

    )

}

Form.propTypes = {

    setName : PropTypes.func.isRequired

}


export default Form