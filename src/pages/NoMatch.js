import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const NoMatch = () => {
  return (
    <div>

      NO PAGE
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  )
}

export default NoMatch
