import React from 'react'

import PropTypes from 'prop-types'

import Link from './link'
import Tag from './tag'
import './work.css'

const Work = (props) => {
  return (
    <div className="work-work">
      <img alt="image" src={props.Image} className="work-image" />
      <div className="work-details">
        <div className="work-header">
          <div className="work-heading">
            <span className="work-text">{props.Title}</span>
            <Link rootClassName="link-root-class-name1"></Link>
          </div>
          <span className="work-text1">{props.Description}</span>
        </div>
        <div className="work-tags">
          <Tag></Tag>
          <Tag Tag="Strategy"></Tag>
        </div>
      </div>
    </div>
  )
}

Work.defaultProps = {
  Image: '/sgiutryioduopsi-400w.png',
  Description:
    'Each Whale has an equivalent value to the Utility Token. Staking #Whale NFT Locks them thus reducing tradable supply',
  Title: 'STAKE BWYC',
}

Work.propTypes = {
  Image: PropTypes.string,
  Description: PropTypes.string,
  Title: PropTypes.string,
}

export default Work
