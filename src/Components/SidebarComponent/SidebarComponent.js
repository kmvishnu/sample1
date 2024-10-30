import React from 'react'
import './SidebarComponent.css'
import { useNavigate } from 'react-router-dom'


const SidebarComponent = () => {

  const navigate = useNavigate();
  return (
    <div className='sidebar'>
        <button className='sidebarButton' onClick={()=>navigate('/')}>Home</button>
        <button className='sidebarButton' onClick={()=>navigate('/todo')}>TodoApp</button>
        <button className='sidebarButton' onClick={()=>navigate('/about')}>About</button>
    </div>
  )
}

export default SidebarComponent