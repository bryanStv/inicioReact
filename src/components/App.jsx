//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import '../App.css'


function App() {

  const users = [
    { id: 1, name: 'Nathan', role: 'Web Developer' },
    { id: 2, name: 'John', role: 'Web Designer' },
    { id: 3, name: 'Jane', role: 'Team Leader' },
  ]

  return (
    <>
      <p>The currently active users list:</p>
      <ul>
      {
        users.map(function(user){
          return (
            <li className="text-lowercase" key={user.id}> {user.id} - {user.name} as the {user.role} </li>
          )
        })
      }
      </ul>
    </>
  )
}

export default App
