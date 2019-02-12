import React from 'react'
import {NavLink} from 'react-router-dom'
import './styles.css'

const Home = () => {
    return(
        <div className='home'>
            <h1>GOLD SHADES</h1>
            
            <img src={require('../images/logo.png')} alt='logo' 
            height='200px' width='350px' />
            <h2>NEW ALBUM OUT NOW!</h2>
            <button className='listenButton'>
                <NavLink exact to='/stream' className='listenButton_link'>
                Listen / Purchase</NavLink>
            </button>
        </div>
    )
}

export default Home