import React, { useState } from 'react';
import './SidebarComponent.css';
import { useNavigate } from 'react-router-dom';

const SidebarComponent = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState('/');

  const handleButtonClick = (path) => {
    setActiveButton(path);
    navigate(path);
  };

  return (
    <div className='sidebar'>
      <button 
        className={`sidebarButton ${activeButton === '/' ? 'active' : ''}`} 
        onClick={() => handleButtonClick('/')}>
        Home
      </button>
      <button 
        className={`sidebarButton ${activeButton === '/todo' ? 'active' : ''}`} 
        onClick={() => handleButtonClick('/todo')}>
        TodoApp
      </button>
      <button 
        className={`sidebarButton ${activeButton === '/about' ? 'active' : ''}`} 
        onClick={() => handleButtonClick('/about')}>
        About
      </button>
    </div>
  );
}

export default SidebarComponent;
