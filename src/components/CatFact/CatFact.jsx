import { useEffect, useState } from 'react'

const CatFact = () => {

    const [fact, setFact] = useState("")

    useEffect(() => {
        fetch('https://catfact.ninja/fact')
            .then((response) => response.json())
            .then((data) => setFact(data.fact))
    }, [])


    return (
        <div>{fact}</div>
    )
}

export default CatFact