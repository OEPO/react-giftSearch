import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function AddCategory({ setCategories }) {

    const [input, setInput] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        if (input.trim().length > 2) {
            setCategories(cat => [input,...cat]);
            setInput('');
        }


    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={(e) => { setInput(e.target.value) }}
            />

        </form>
    )


}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}