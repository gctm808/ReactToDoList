import React from 'react'
import './styles.css'
import './mediaQueries.css'

const Contact = () => {
    return(
        <div className='contact'>
            <img src={require('../images/marlon.png')} alt='marlon' className='contact_bg' />
            <div className='pageHeader centerText'>
                <h1><span className='smallText'>KEEP</span><br/>IN TOUCH</h1>
            </div>
            <h2>Next Performances/Appearances:</h2>
            <div className='nextPerformances'>
                <div className='nextPerformances_div'>Nothing Currently Scheduled</div>
            </div>
            <h2>Inquiries / Bookings</h2>
            <form>
                Name:<br/>
                <input className='contactFields' type='text' name='name' size='40' maxLength='40'/><br/>
                Email:<br/>
                <input className='contactFields' type='text' name='email' size='40' maxLength='40' /><br/>
                Message:<br/>
                <textarea className='contactFields' rows='8' cols='60'  maxLength='1000' /><br/>
                <input type='submit' value='Submit' className='button button_link' />
            </form>
        </div>
    )
}

export default Contact