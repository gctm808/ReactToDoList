import React from 'react'
import {NavLink} from 'react-router-dom'
import './styles.css'

const Home = () => {
    return(
        <div className='home'>
            <h1>GOLD SHADES</h1>
            <h2>NEW ALBUM "GOLD SHADES" OUT NOW!</h2>
            <button>
                <NavLink exact to='/stream'>Stream Us</NavLink>
            </button>
        </div>
    )
}

export default Home