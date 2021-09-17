// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Greeting(props) {
  // 💣 delete this variable declaration and replace it with a React.useState call
  const [name, setName] = React.useState(props.initialName)

  function handleChange(event) {
    // 🐨 update the name here based on event.target.value
    const name = event.target.value
    if (name)
      setName(event.target.value)
    else
      setName(props.initialName)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" value={name} />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName="World" />
}

export default App
