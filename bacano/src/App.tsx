import './App.css'
import Home from './home/home'
import Name from './name/name'
import Elements from './uiElements/ui'
import Nav from './nav/nav'
import UserContext from './provider/context'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Hooks from './hooks/hooks'
import Context from './context/context'

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
          <Routes>
            <Route path='' element={ <Home /> } />
            <Route path='/elements' element={ <Elements /> } />
            <Route path='/hooks' element={ <Hooks /> } />
            <Route path='/name' element={ <Name /> } />
            <Route path='/context' element={
              <UserContext value={{ user, setUser}}>
                <Context />
              </UserContext>
              } />
          </Routes>
      </div>
    </div>
  )
}

export default App