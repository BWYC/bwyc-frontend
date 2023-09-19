import React from 'react'

import PropTypes from 'prop-types'

import './statistic.css'

const Statistic = (props) => {
  return (
    <div className={`statistic-statistic ${props.rootClassName} `}>
      <span className="statistic-sta">{props.Caption}</span>
      <span className="statistic-sta1">{props.Value}</span>
    </div>
  )
}

Statistic.defaultProps = {
  rootClassName: '',
  Value: '4,501',
  Caption: 'MINTED WHALES',
}

Statistic.propTypes = {
  rootClassName: PropTypes.string,
  Value: PropTypes.string,
  Caption: PropTypes.string,
}

export default Statistic
