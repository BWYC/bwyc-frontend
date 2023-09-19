import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './client.css'

const Client = (props) => {
  return (
    <div className={`client-client ${props.rootClassName} `}>
      <div className="client-div">
        <React.Fragment>
          <React.Fragment>
            <blockquote className="twitter-tweet">
              <p lang="en" dir="ltr">
                The Future is here, Join the Moving Train NOW..{' '}
                <a href="https://twitter.com/search?q=%24WHLS&src=ctag&ref_src=twsrc%5Etfw">
                  \$WHLS
                </a>{' '}
                <a href="https://twitter.com/hashtag/BWYC?src=hash&ref_src=twsrc%5Etfw">
                  #BWYC
                </a>
                . mint a Bored Whale Yacht Club NFT at{' '}
                <a href="https://t.co/p5GjRooDY7">https://t.co/p5GjRooDY7</a>{' '}
                Stake this Masterpiece to receive{' '}
                <a href="https://twitter.com/search?q=%24WHLS&src=ctag&ref_src=twsrc%5Etfw">
                  \$WHLS
                </a>{' '}
                Utility tokens .
                <a href="https://t.co/z6v6OTcWBp">https://t.co/z6v6OTcWBp</a>
                <a href="https://twitter.com/hashtag/BWYC?src=hash&ref_src=twsrc%5Etfw">
                  #BWYC
                </a>
                <a href="https://twitter.com/hashtag/WHLS?src=hash&ref_src=twsrc%5Etfw">
                  #WHLS
                </a>
                <a href="https://twitter.com/hashtag/NFTCommunity?src=hash&ref_src=twsrc%5Etfw">
                  #NFTCommunity
                </a>{' '}
                <a href="https://twitter.com/hashtag/BTC?src=hash&ref_src=twsrc%5Etfw">
                  #BTC
                </a>{' '}
                <a href="https://twitter.com/hashtag/WHALEONWAVE?src=hash&ref_src=twsrc%5Etfw">
                  #WHALEONWAVE
                </a>{' '}
                <a href="https://t.co/nyUpkdJyct">pic.twitter.com/nyUpkdJyct</a>
              </p>
              — C ANGLO (@mmaglo2){' '}
              <a href="https://twitter.com/mmaglo2/status/1699062518545777056?ref_src=twsrc%5Etfw">
                September 5, 2023
              </a>
            </blockquote>{' '}
            <Script
              async={true}
              src="https://platform.twitter.com/widgets.js"
              charSet="utf-8"
            />{' '}
          </React.Fragment>
        </React.Fragment>
      </div>
    </div>
  )
}

Client.defaultProps = {
  Mention: '@agncy',
  Quote:
    '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.“',
  rootClassName: '',
  Avatar:
    'https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2OTA2MTI0MQ&ixlib=rb-4.0.3&w=200',
  Author: 'Joanna Smith',
}

Client.propTypes = {
  Mention: PropTypes.string,
  Quote: PropTypes.string,
  rootClassName: PropTypes.string,
  Avatar: PropTypes.string,
  Author: PropTypes.string,
}

export default Client
