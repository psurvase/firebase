import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [isLogin, setIsLogin] = useState(false)

    const {login, signup, currentUser} = useAuth()
    console.log(currentUser)
     const handleSubmit =async()=>{
        if(!email || !password) {
            setError("Please enter email or password")
            return
        }
        if(isLogin){
          try{
            return  await login(email,password)
          }catch(error){
            setError("Incorrect email and password") 
          }
        }
        await signup(email, password)
    }
  return (
    <div>
        <h4>{!isLogin ? "LOGIN": "REGISTER"} </h4>
        {error && <div>{error}</div>}
        <label> Email</label>
        <input type="text" placeholder='email...' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <br/> <br/>
        <label>Password</label>
        <input type="password" placeholder='Password...' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br/><br/>
        <div>
        <button type="submit" onClick={handleSubmit} >Submit</button>
        </div>
        {/* <h2 onClick={()=>setIsLogin(!isLogin)} >{!isLogin ? "LOGIN": "REGISTER"}</h2> */}
    </div>
  )
}

export default Login