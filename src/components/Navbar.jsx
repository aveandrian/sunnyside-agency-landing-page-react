import { useState } from 'react'
import '../styles/Navbar.css'

export default function Navbar(){
    const [isOpened, setIsOpened] = useState(false)

    function toggleIsOpened(){
        setIsOpened(prev => !prev)
    }
    return (
        <nav>
            <img className='logo'  src='/images/logo.svg' alt='Logo'></img>
            
            <div className={`nav-items ${isOpened ? "opened" : ""}`}>
                <a>About</a> 
                <a>Services</a> 
                <a>Projects</a>
                <div className='contact-container'>
                    <a className='contact-link'>Contact</a>
                </div>
                
            </div>
            <img className='menu-btn' src='/images/icon-hamburger.svg' onClick={toggleIsOpened} alt='Menu button'></img>
        </nav>
        
    )
}