import React from 'react'
import { NavLink } from 'react-router-dom'
import {Navbar} from 'mdbreact'
import {Animation} from 'mdbreact'

import './Shared.css'

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
    </Navbar>
    
  )
}