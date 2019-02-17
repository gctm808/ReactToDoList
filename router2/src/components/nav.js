import React, {Component} from 'react'
import {NavLink, Route} from 'react-router-dom'
import {spring, AnimatedSwitch} from 'react-router-transition'
import Home from './home.js'
import Stream from './stream.js'
import Social from './social.js'
import Contact from './contact.js'
import Footer from './footer.js'
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
    constructor(props){
        super(props)

        this.state={
            navBarOpen: false
        }

        this.showMenu = this.showMenu.bind(this)
    }

    showMenu(){
        let links = document.getElementsByClassName('navLink')
       
        if(!this.state.navBarOpen){
            for(let i = 0; i < links.length; i++){
                links.item(i).classList.add('showLink')
            }

            this.setState({
                navBarOpen: true
            })
        } else {
            for(let i = 0; i < links.length; i++){
                links.item(i).classList.remove('showLink')
            }
            this.setState({
                navBarOpen: false
            })
        }

    }

    render(){
        return(
            <div id="dashboard">
                <div className="nav" onClick={this.showMenu}>
                    <NavLink exact to='/' className='navLink' activeClassName='is-active'>Home</NavLink>
                    <NavLink exact to='/stream'  className='navLink' activeClassName='is-active'>Stream</NavLink>
                    <NavLink exact to='/social'  className='navLink' activeClassName='is-active'>Follow</NavLink>
                    <NavLink exact to='/contact'  className='navLink' activeClassName='is-active'>Contact</NavLink>
                </div>
                <AnimatedSwitch
                    atEnter={bounceTransition.atEnter}
                    atLeave={bounceTransition.atLeave}
                    atActive={bounceTransition.atActive}
                    mapStyles={mapStyles}
                    className="content"
                >
                    <Route exact path='/' component={Home} />
                    <Route exact path='/stream' component={Stream} />
                    <Route exact path='/social' component={Social} />
                    <Route exact path='/contact' component={Contact} />
                </AnimatedSwitch>
                <div className='footerContainer'>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Nav