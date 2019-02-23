import React from 'react'
import Twitter from './twitter.js'
import './styles.css'
import './mediaQueries.css'

const Social = () => {
    return(
        <div className='social'>
            <img src={require('../images/gary.png')} alt='gary' className='social_bg' />
            <div className='pageHeader centerText'>
                <h1><span className='smallText'>STAY</span><br />CONNECTED</h1>
            </div>
            <img src={require('../images/igPlaceholder.png')} alt='placeholder' className='insta' />
        
            <div className='socialTwitterContainer'>
                <div className='socialLinks'>
                    <a href={'http://facebook.com/goldshadesmusic'} target='_blank' rel='noopener noreferrer'><img src={require('../images/facebook.png')} alt='fbLogo' /></a>
                    <a href={'http://soundcloud.com'} target='_blank' rel='noopener noreferrer'><img src={require('../images/soundcloud.png')} alt='soundcloudLogo' /></a> 
                    <a href={'http://spotify.com'} target='_blank' rel='noopener noreferrer'><img src={require('../images/spotify.png')} alt='spotifyLogo' /></a>
                    <a href={'http://apple.com/music'} target='_blank' rel='noopener noreferrer'><img src={require('../images/apple.png')} alt='appleLogo' /></a>
                </div>
                <div className='twitter'>
                    <Twitter />
                </div>
            </div>
        </div>
    )
}

export default Social