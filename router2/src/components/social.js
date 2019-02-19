import React from 'react'
import Twitter from './twitter.js'
import './styles.css'

const Social = () => {
    return(
        <div className='social'>
            <div className='social_bg' />
            <div className='social_bg_color' />
            <h1>STAY <span className='goldFont'>CONNECTED</span> WITH US</h1>
        
            <img src={require('../images/igPlaceholder.png')} alt='placeholder' height='225px' width='225px'
            className='insta' />
        
            <div className='socialTwitterContainer'>
                <div className='socialLinks'>
                    <a href='facebook.com/goldshadesmusic' target='_blank'><img src={require('../images/facebook.png')} alt='fbLogo' /></a>
                    <a href='soundcloud.com' target='_blank'><img src={require('../images/soundcloud.png')} alt='soundcloudLogo' /></a> 
                    <a href='spotify.com' target='_blank'><img src={require('../images/spotify.png')} alt='spotifyLogo' /></a>
                    <a href='apple.com/music' target='_blank'><img src={require('../images/apple.png')} alt='appleLogo' /></a>
                </div>
                <div className='twitter'>
                    <Twitter />
                </div>
            </div>
        </div>
    )
}

export default Social