import React, { useState } from 'react'
const InputH1 = () => {
    const [text, setText] = useState("")
    const handleChange = ({ target: { value } }) => {
        setText(value)
    }
    return (
        <>
            <input onChange={handleChange} type="text" />
            <h1>{text}</h1>
        </>
    )
}

export default InputH1