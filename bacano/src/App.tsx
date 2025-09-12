import './App.css'
import Home from './home/home'
import Name from './name/name'
import Elements from './uiElements/ui'
import Nav from './nav/nav'
import UserContext from './provider/context'
import { useState } from 'react'

function App() {

  interface User{
    name: string,
    age: number
  }

  const [user, setUser] = useState<User>({
    name: 'Michael',
    age: 20
  })

  return (
    <div className='view'>
      <div className='up'>
        <Nav></Nav>
      </div>
      <div className='down'>
        <UserContext value={{ user, setUser }}>
          <Home />
        </UserContext>
        <Name />
        <Elements />
      </div>
    </div>
  )
}

export default App