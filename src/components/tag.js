import React from 'react'

import PropTypes from 'prop-types'

import './tag.css'

const Tag = (props) => {
  return (
    <div className="tag-container">
      <span className="tag-tag tag">{props.Tag}</span>
    </div>
  )
}

Tag.defaultProps = {
  Tag: 'About Staking',
}

Tag.propTypes = {
  Tag: PropTypes.string,
}

export default Tag
