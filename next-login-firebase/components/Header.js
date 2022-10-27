import React from 'react'
import { useAuth } from '../context/AuthContext'

const Header = () => {
  const {currentUser, logout}= useAuth()
  return (
    <div style={{textAlign:"center"}} >
        <h2>Welcome plz add the product..!</h2>
        <h2>{currentUser && <button onClick={()=>logout()} >logout</button>}</h2>
        

    </div>
  )
}

export default Header