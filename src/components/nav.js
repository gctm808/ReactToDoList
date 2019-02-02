import React, {Component} from 'react'
import {NavLink, Route} from 'react-router-dom'
import {spring, AnimatedSwitch} from 'react-router-transition'
import Home from './home.js'
import About from './about.js'
import Contact from './contact.js'
import './nav.css'

const bounceTransition = {
    // start in a transparent, upscaled state
    atEnter: {
      opacity: 0,
      scale: 1.2,
    },
    // leave in a transparent, downscaled state
    atLeave: {
      opacity: bounce(0),
      scale: bounce(0.8),
    },
    // and rest at an opaque, normally-scaled state
    atActive: {
      opacity: bounce(1),
      scale: bounce(1),
    },
};

function mapStyles(styles) {
    return {
      opacity: styles.opacity,
      transform: `scale(${styles.scale})`
    }
}

function bounce(val) {
    return spring(val, {
      stiffness: 330,
      damping: 22,
    });
}

class Nav extends Component {

    render(){
        return(
            <div id="dashboard">
                <div className="nav">
                    <NavLink exact to='/'>Home</NavLink>
                    <NavLink exact to='/about'>About</NavLink>
                    <NavLink exact to='/contact'>Contact</NavLink>
                </div>
                <AnimatedSwitch
                    atEnter={bounceTransition.atEnter}
                    atLeave={bounceTransition.atLeave}
                    atActive={bounceTransition.atActive}
                    mapStyles={mapStyles}
                    className="content"
                >
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />
                </AnimatedSwitch>
            </div>
        )
    }
}

export default Nav