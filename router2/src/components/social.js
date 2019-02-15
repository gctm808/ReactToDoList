import React from 'react'
import Twitter from './twitter.js'
import './styles.css'

const Social = () => {
    return(
        <div className='social'>
            <div className='social_bg' />
            <h1>STAY CONNECTED WITH US</h1>
            <img src={require('../images/igPlaceholder.png')} alt='placeholder' height='300px' width='300px'/>
            <Twitter />
            <div className='socialLinks'>
                <a href='facebook.com/goldshadesmusic' target='_blank'><img src={require('../images/facebook.png')} alt='fbLogo' /></a>
                <a href='soundcloud.com' target='_blank'><img src={require('../images/soundcloud.png')} alt='soundcloudLogo' /></a> 
                <a href='spotify.com' target='_blank'><img src={require('../images/spotify.png')} alt='spotifyLogo' /></a>
                <a href='apple.com/music' target='_blank'><img src={require('../images/apple.png')} alt='appleLogo' /></a>
            </div>
        </div>
    )
}

export default Social