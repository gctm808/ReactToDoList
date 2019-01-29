import React, {Component} from 'react'
import {NavLink, Route} from 'react-router-dom'
import Home from './home.js'
import About from './about.js'
import Contact from './contact.js'

class Nav extends Component {
    render(){
        return(
            <div id="dashboard">
                <div className="nav">
                    <NavLink exact to='/'>Home</NavLink>
                    <NavLink exact to='/about'>About</NavLink>
                    <NavLink exact to='/contact'>Contact</NavLink>
                </div>
                <div className="content">
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />
                </div>
            </div>
        )
    }
}

export default Nav