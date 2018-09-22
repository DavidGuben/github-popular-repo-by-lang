import React, { Component } from 'react'


import './Shared.css'

class Grid extends Component {
  constructor(props) {
    super(props)

    let repos
    
      repos = window.__INITIAL_DATA__
      delete window.__INITIAL_DATA__


    this.state = {
      repos,
      loading: repos ? false : true,
    }

    this.fetchRepos = this.fetchRepos.bind(this)
  }
  componentDidMount () {
    if (!this.state.repos) {
      this.fetchRepos(this.props.match.params.id)
    }
  }
  componentDidUpdate (prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchRepos(this.props.match.params.id)
    }
  }
  fetchRepos (lang) {
    this.setState(() => ({
      loading: true
    }))

    this.props.fetchInitialData(lang)
      .then((repos) => this.setState(() => ({
        repos,
        loading: false,
      })))
  }

  render() {
    const { loading, repos } = this.state

    if (loading === true) {
      return (
        <div className="load-wrapp">
        <div className="load-3">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
    </div>
        
      )
    }

    return (
      <ul 
      style={{display: 'flex', flexWrap: 'wrap'}}>
        {repos.map(({ name, owner, stargazers_count, html_url }) => (
          <li key={name} className="lang-card">
            <ul>
              <li><a href={html_url} target="_blank">{name}</a></li>
              <li className="owner">@{owner.login}</li>
              <li className="stars">{stargazers_count} stars</li>
            </ul>
          </li>
        ))}
      </ul>
    )
  }
}

export default Grid