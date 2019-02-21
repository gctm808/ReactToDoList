import React from 'react'
import './styles.css'

const Contact = () => {
    return(
        <div className='contact'>
            <div className='contact_bg' />
            <h1>KEEP IN TOUCH</h1>
            <h2>Next Performances/Appearances:</h2>
            <div className='nextPerformances'>
                <div className='nextPerformances_div'>Nothing Currently Scheduled</div>
            </div>
            <h2>Inquiries / Bookings</h2>
            <form>
                Name:<br/>
                <input type='text' name='name' size='40' maxLength='40'/><br/>
                Email:<br/>
                <input type='text' name='email' size='40' maxLength='40' /><br/>
                Message:<br/>
                <textarea rows='8' cols='60'  maxLength='1000' /><br/>
                <input type='submit' value='Submit' className='button button_link' />
            </form>
        </div>
    )
}

export default Contact