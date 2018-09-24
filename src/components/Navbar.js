import React, {Component} from 'react'

import {Navbar, NavLink, Animation, Collapse, NavbarToggler} from 'mdbreact'

import githubLogo from './../imgs/github.svg'
import home from './../imgs/home.svg'

import './App.css'


class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      languages: [{
        name: 'All',
        param: 'all'
      }, {
        name: 'JavaScript',
        param: 'javascript',
      }, {
        name: 'Ruby',
        param: 'ruby',
      }, {
        name: 'Python',
        param: 'python',
      }, {
        name: 'Java',
        param: 'java',
      }],
      isWideEnough: false,
      collapse: false
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick(){
    this.setState({
        collapse: !this.state.collapse,
    });
  }

  render() {
    return(
      <Navbar expand="md" scrolling dark>
      { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } /> }
      <Collapse isOpen = { this.state.collapse } navbar>
      <div>

        <a href="https://github.com/DavidGuben/poprepo" target="_blank" rel="noopener noreferrer">
        <img src={githubLogo}
          style={{
            position: 'relative',
            width: 40, height: 40, 
            paddingRight: 10,
            }}
            alt="GitHub Logo" /></a>

        <a href="http://davidguben.com/" target="_blank" rel="noopener noreferrer">
        <img src={home}
          style={{
            position: 'relative',
            width: 40, height: 40, 
            paddingRight: 5,
            }}
            alt="DavidGuben.com" /></a>

      </div>

      <div>      
        {this.state.languages.map(({ name, param }) => (
          <li key={param} className="nav-item">
          <Animation type="fadeIn">
          
          
            <NavLink activeStyle={{fontWeight: 'bold'}} to=
            {`/popular/${param}`}>
              {name}
            </NavLink>
          
          
          </Animation> 
          </li>
        ))}
      </div>
      </Collapse>
    </Navbar>
    )
  }
}

export default Nav