import React from 'react'

import PropTypes from 'prop-types'

import './service.css'

const Service = (props) => {
  return (
    <div className={`service-service ${props.rootClassName} `}>
      <h3 className="service-title">{props.Title}</h3>
      <span className="service-description">{props.Description}</span>
    </div>
  )
}

Service.defaultProps = {
  Title: 'Branding',
  rootClassName: '',
  Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
}

Service.propTypes = {
  Title: PropTypes.string,
  rootClassName: PropTypes.string,
  Description: PropTypes.string,
}

export default Service
