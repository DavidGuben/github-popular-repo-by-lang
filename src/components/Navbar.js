import React from 'react'
import { NavLink } from 'react-router-dom'
import {Navbar} from 'mdbreact'
import {Animation} from 'mdbreact'

import githubLogo from './../imgs/github.svg'
import home from './../imgs/home.svg'

import './App.css'

export default function Nav () {

  const languages = [{
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
  }]

  return (
    
    <Navbar expand="md" scrolling>

      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>

        <a href="https://github.com/DavidGuben/poprepo" target="_blank" rel="noopener noreferrer">
        <img src={githubLogo}
          style={{
            width: 40, height: 40, 
            paddingRight: 10, position: 'relative',
            marginRight: 5
            }}
            alt="GitHub Logo" /></a>

        <a href="http://davidguben.com/" target="_blank" rel="noopener noreferrer">
        <img src={home}
          style={{
            width: 40, height: 40, 
            paddingRight: 5, position: 'relative',
            }}
            alt="DavidGuben.com" /></a>

      </div>

      <div>      
        {languages.map(({ name, param }) => (
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

    </Navbar>
    
  )
}