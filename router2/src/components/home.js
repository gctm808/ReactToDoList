import React from 'react'
import {NavLink} from 'react-router-dom'
import './styles.css'
import './mediaQueries.css'

const Home = () => {
    return(
        <div className='home'>
            <div className='border_dec' />
            <img src={require('../images/gs.png')} alt='band' className='background' />
            <img src={require('../images/logo.png')} alt='logo' 
            height='100px' width='300px' id='logo'/>
            <h2>NEW ALBUM OUT NOW!</h2>
            <img src={require('../images/album.jpg')} alt='album' 
            height='200px' width='200px' className='album'/><br />
            <button className='button'>
                <NavLink exact to='/stream' className='button_link'>Listen / Purchase &rarr;</NavLink>
            </button>
        </div>
    )
}

export default Home