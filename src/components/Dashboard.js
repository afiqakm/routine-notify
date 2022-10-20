import React from 'react'
import Navbar from './Navbar'
import Tab from './Tab'

export default function Dashboard() {
  return (
    <div className='flex flex-col m-3 gap-5'>
        <Navbar/>
        <Tab/>
    </div>
  )
}
