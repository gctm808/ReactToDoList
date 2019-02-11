import React from 'react'
import Twitter from './twitter.js'
import './styles.css'

const Social = () => {
    return(
        <div className='social'>
            <h1>STAY CONNECTED WITH US</h1>
            <img src={require('../images/igPlaceholder.png')} alt='placeholder' height='300px' width='300px'/>
            <Twitter />
            <div className='socialLinks'>
                <img src={require('../images/facebook.png')} alt='fbLogo' /> 
                <img src={require('../images/soundcloud.png')} alt='soundcloudLogo' /> 
                <img src={require('../images/spotify.png')} alt='spotifyLogo' /> 
                <img src={require('../images/apple.png')} alt='appleLogo' /> 
            </div>
        </div>
    )
}

export default Social