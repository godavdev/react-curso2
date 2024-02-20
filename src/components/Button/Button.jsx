import { useState } from "react"

const Button = ({ nombre, edad }) => {

    const [edadState, setEdadState] = useState(edad)

    return (
        <div
            onClick={() => setEdadState(edadState + 1)}
            style={{ backgroundColor: "chocolate" }}
        >Te llamas:{nombre} y tienes:{edadState} anios</div>
    )
}

export default Button