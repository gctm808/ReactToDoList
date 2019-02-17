import React from 'react'
import './styles.css'

const Stream = () => {
    return(
        <div className='stream'>
            <div className='stream_bg' />
            <div class='streamHeader'>
                <h1><span id='smallText'>STREAM</span><br />"GOLD SHADES"</h1>
            </div>
        
            <div id='spotifyPlayer'>
                <iframe title='gsSpotify' src="https://open.spotify.com/embed/album/21XJBWeF5Vb8FmzFnW7ckx" 
                width="250" height="320" frameborder="0" 
                allowtransparency="true" allow="encrypted-media" />
            </div>
            
            <div className='purchaseLinks'>
                <div className='purchaseLinks_divider'>
                    <button className='button button_link'>Stream on Apple Music &rarr;</button>
                    <button className='button button_link'>Stream on Spotify &rarr;</button>
                    <button className='button button_link'>Stream on Tidal &rarr;</button>
                </div>
                <div className='purchaseLinks_divider'>
                    <button className='button button_link'>Purchase on iTunes &rarr;</button>
                    <button className='button button_link'>Purchase on Amazon &rarr;</button>
                    <button className='button button_link'>Purchase on Google Music &rarr;</button>
                </div>
            </div>

        </div>
    )
}


export default Stream