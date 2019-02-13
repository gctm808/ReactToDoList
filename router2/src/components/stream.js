import React from 'react'
import './styles.css'

const Stream = () => {
    return(
        <div className='stream'>
            <h1>STREAM "GOLD SHADES" NOW!</h1>
            <iframe title='gsSpotify' src="https://open.spotify.com/embed/album/21XJBWeF5Vb8FmzFnW7ckx" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media" />
            <div className='purchaseLinks'>
                <button className='button'>Stream on Apple Music &rarr;</button>
                <button className='button'>Stream on Spotify &rarr;</button>
                <button className='button'>Purchase on iTunes &rarr;</button>
                <button className='button'>Purchase on Amazon &rarr;</button>
            </div>
        </div>
    )
}

export default Stream