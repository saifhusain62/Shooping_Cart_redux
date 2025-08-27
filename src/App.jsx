import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className='bg-white'>

     <Navbar/>
     <main className='max-w-7xl px-4 min-h-screen'>
     <Outlet/>
     </main>
      
    </div>
  )
}

export default App
