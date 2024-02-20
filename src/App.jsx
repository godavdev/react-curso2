import { useState } from 'react'
import Button from './components/Button/Button'

function App() {
  const [count, setCount] = useState(0)

  const aumentar = () => setCount(count + 1)
  const disminuir = () => setCount(count - 1)

  return (
    <>
      <h1>
        {count}
      </h1>
      <p onClick={aumentar}>Aumentar</p>
      <p onClick={disminuir}>Disminuir</p>
      <Button nombre={"David"} edad={16} />
      <Button nombre={"Juan"} edad={32} />
      <Button nombre={"Carlos"} edad={56}/>
    </>
  )
}

export default App
