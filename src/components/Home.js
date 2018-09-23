import React from 'react'
import githubLogo from './../imgs/github.svg'

import { Animation } from 'mdbreact'

import './Shared.css'

export default function Home () {
  return (
    <Animation type="fadeInUp">
      <div className="home">
      <img src={githubLogo} className="github-logo" alt="GitHub Logo"/>
      <p style={{marginTop: 20}}>  
        Select a Language to view their most popular repositories on <a href="https://www.github.com">GitHub</a>.
      </p>
      </div>
    </Animation>
  )
}