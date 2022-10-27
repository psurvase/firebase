import Head from 'next/head'
import Image from 'next/image'
import DashBoard from '../components/DashBoard'
import Login from '../components/Login'
import { useAuth } from '../context/AuthContext'
import styles from '../styles/Home.module.css'

export default function Home() {
  const {currentUser}= useAuth()
  return (
    <div style={{textAlign:"center"}} className={styles.container}>
    
    {!currentUser && <Login />}
    {currentUser && <DashBoard />}
    
    </div>
  )
}
