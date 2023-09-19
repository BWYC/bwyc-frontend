import React from 'react'

import { Helmet } from 'react-helmet'

import './ordinals.css'

import App1  from "../App"

const Ordinals = (props) => {
  return (
    <div className="ordinals-container">
      <Helmet>
        <title>Ordinals - bwyc</title>
        <meta property="og:title" content="Ordinals - bwyc" />
      </Helmet>
      <App1 />
    </div>
  )
}

export default Ordinals
