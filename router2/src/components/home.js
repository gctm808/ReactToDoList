import React from 'react'
import {NavLink} from 'react-router-dom'
import './styles.css'

const Home = () => {
    return(
        <div className='home'>
            <img src={require('../images/logo.png')} alt='logo' 
            height='100px' width='300px' />
            <h2>NEW ALBUM OUT NOW!</h2>
            <img src={require('../images/album.jpg')} alt='album' 
            height='150px' width='150px' /><br />
            <button className='button'>
                <NavLink exact to='/stream' className='listenButton_link'>
                Listen / Purchase</NavLink>
            </button>
        </div>
    )
}

export default Home