import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { Home, Issue, Responsibility, Projects } from './'
const NoMatch = () => {
  return (
    <div>
      <Header/>

      NO PAGE
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  )
}

export default NoMatch
