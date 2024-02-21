import { useState } from 'react'
import Button from './components/Button/Button'
import InputH1 from './components/InputH1/InputH1'
import CatFact from './components/CatFact/CatFact'

function App() {
  const [count, setCount] = useState(0)

  const aumentar = () => setCount(count + 1)
  const disminuir = () => setCount(count - 1)

  return (
    <>
      <CatFact />
    </>
  )
}

export default App
