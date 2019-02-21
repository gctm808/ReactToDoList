import React from 'react'
import './styles.css'

const Stream = () => {
    return(
        <div className='stream'>
            <div className='stream_bg' />
            <div className='stream_bg_color' />
            <div className='pageHeader'>
                <h1><span className='smallText'>STREAM</span><br />"GOLD SHADES"</h1>
            </div>
        
            <div id='spotifyPlayer'>
                <iframe id='spotify' title='gsSpotify' src="https://open.spotify.com/embed/album/21XJBWeF5Vb8FmzFnW7ckx" 
                width="250" height="320" frameborder="0" 
                allowtransparency="true" allow="encrypted-media" />
            </div>
            
            <div className='purchaseLinks'>
                <div className='purchaseLinks_divider'>
                    <a href={'http://apple.com'} target='_blank' rel='noopener noreferrer'><button className='button button_link'>Stream on Apple Music &rarr;</button></a>
                    <a href={'http://spotify.com'} target='_blank' rel='noopener noreferrer'><button className='button button_link'>Stream on Spotify &rarr;</button></a>
                    <a href={'http://tidal.com'} target='_blank' rel='noopener noreferrer'><button className='button button_link'>Stream on Tidal &rarr;</button></a>
                </div>
                <div className='purchaseLinks_divider'>
                    <a href={'http://apple.com'} target='_blank' rel='noopener noreferrer'><button className='button button_link'>Purchase on iTunes &rarr;</button></a>
                    <a href={'http://amazon.com'} target='_blank' rel='noopener noreferrer'><button className='button button_link'>Purchase on Amazon &rarr;</button></a>
                    <a href={'http://google.com'} target='_blank' rel='noopener noreferrer'><button className='button button_link'>Purchase on Google Music &rarr;</button></a>
                </div>
            </div>

        </div>
    )
}


export default Stream