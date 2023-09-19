import React from "react";

import { Helmet } from "react-helmet";

import Link from "../components/link";
import "./home.css";
import Ordinals from "./ordinals";

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>bwyc</title>
        <meta property="og:title" content="bwyc" />
      </Helmet>
      <div className="home-navbar">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <div className="home-branding">
            <img alt="image" src="/favicon-200h.png" className="home-logo" />
            <span className="home-company">BWYC</span>
          </div>
          <div className="home-items">
            <a
              href="/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link"
            >
              <div className="home-links">
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M1024 590.444l-512-397.426-512 397.428v-162.038l512-397.426 512 397.428zM896 576v384h-256v-256h-256v256h-256v-384l384-288z"></path>
                </svg>
                <a href="/" className="home-text nav-link">
                  HOME
                </a>
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M817.57 348.15c-193.566-143.858-260.266-259.018-305.566-348.148v0c-0.004 0-0.004-0.002-0.004-0.002v0.002c-45.296 89.13-112 204.292-305.566 348.148-330.036 245.286-19.376 587.668 253.758 399.224-17.796 116.93-78.53 202.172-140.208 238.882v37.744h384.032v-37.74c-61.682-36.708-122.41-121.954-140.212-238.884 273.136 188.446 583.8-153.94 253.766-399.226z"></path>
                </svg>
                <a href="#mint" className="home-text01 nav-link">
                  WHALECARD
                </a>
                <svg
                  viewBox="0 0 760.0274285714286 1024"
                  className="home-icon04"
                >
                  <path d="M666.857 365.714c7.429 76-24.571 121.714-74.857 147.429 83.429 20 136 69.714 125.714 181.143-13.143 138.857-116 176-263.429 184v145.714h-88v-143.429c-22.286 0-45.714 0-69.714-0.571v144h-88v-145.714c-20.571 0-41.143-0.571-62.286-0.571h-114.286l17.714-104.571c64.571 1.143 63.429 0 63.429 0 24.571 0 31.429-17.714 33.143-29.143v-229.714h9.143c-3.429-0.571-6.857-0.571-9.143-0.571v-164c-3.429-18.286-14.857-38.857-50.857-38.857 0 0 1.143-1.143-63.429 0v-93.714l121.143 0.571c17.714 0 36.571 0 55.429-0.571v-144h88v141.143c23.429-0.571 46.857-1.143 69.714-1.143v-140h88v144c113.143 9.714 202.857 44.571 212.571 148.571zM544 677.143c0-113.143-186.286-96.571-245.714-96.571v193.143c59.429 0 245.714 12.571 245.714-96.571zM503.429 405.143c0-103.429-155.429-88-205.143-88v175.429c49.714 0 205.143 11.429 205.143-87.429z"></path>
                </svg>
                <a href="#sats" className="home-text02 nav-link">
                  ORDINALS
                </a>
                <svg
                  viewBox="0 0 1097.142857142857 1024"
                  className="home-icon06"
                >
                  <path d="M338.857 512c-59.429 1.714-113.143 27.429-151.429 73.143h-76.571c-57.143 0-110.857-27.429-110.857-90.857 0-46.286-1.714-201.714 70.857-201.714 12 0 71.429 48.571 148.571 48.571 26.286 0 51.429-4.571 76-13.143-1.714 12.571-2.857 25.143-2.857 37.714 0 52 16.571 103.429 46.286 146.286zM950.857 876c0 92.571-61.143 148-152.571 148h-499.429c-91.429 0-152.571-55.429-152.571-148 0-129.143 30.286-327.429 197.714-327.429 19.429 0 90.286 79.429 204.571 79.429s185.143-79.429 204.571-79.429c167.429 0 197.714 198.286 197.714 327.429zM365.714 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286zM768 365.714c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429zM1097.143 494.286c0 63.429-53.714 90.857-110.857 90.857h-76.571c-38.286-45.714-92-71.429-151.429-73.143 29.714-42.857 46.286-94.286 46.286-146.286 0-12.571-1.143-25.143-2.857-37.714 24.571 8.571 49.714 13.143 76 13.143 77.143 0 136.571-48.571 148.571-48.571 72.571 0 70.857 155.429 70.857 201.714zM1024 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286z"></path>
                </svg>
                <span className="home-text03 nav-link">MEMBERS</span>
              </div>
            </a>
            <button className="home-button start-button button">
              <span className="home-text04">WHALE CONNECT</span>
            </button>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <button className="home-button1 button">
              <img alt="image" src="/hamburger.svg" className="home-image" />
              <span className="home-text05">Start a project</span>
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav"
            >
              <div className="home-top">
                <div className="home-branding1">
                  <img
                    alt="image"
                    src="/favicon-200h.png"
                    className="home-logo1"
                  />
                  <span className="home-company1">BWYC</span>
                </div>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon08">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-items1">
                <div className="home-links1">
                  <a
                    href="/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link1 nav-link"
                  >
                    🪸HOME
                  </a>
                  <a href="#mint" className="home-link2 nav-link">
                    🎴WHALECARDS
                  </a>
                  <span className="nav-link">🐋MEMBERS</span>
                  <a className="nav-link" href="/ordinals">
                    🎭ORDINALS
                  </a>
                </div>
                <button className="start-button button home-button2">
                  <span className="home-text08">CONNECT</span>
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
      <header className="home-hero">
        <div className="home-header">
          <h1 className="home-title"></h1>
          <div className="home-container01">
            <div className="home-container02">
              <div className="home-container03">
                <img
                  alt="image"
                  src="/z%20(30)-200w.png"
                  className="home-image1"
                />
                <img
                  alt="image"
                  src="/z%20(58)-300h.png"
                  className="home-image2"
                />
              </div>
              <div className="home-container04">
                <img
                  alt="image"
                  src="/z%20(68)-200h.png"
                  className="home-image3"
                />
                <img
                  alt="image"
                  src="/z%20(7)-200w.png"
                  className="home-image4"
                />
              </div>
            </div>
          </div>
        </div>
        <p className="home-description">
          Cross-Chain NFT Community on EVM and BITCOIN as Ordinals. Members have
          access to Whaleverse. Mint Whalecards or #Whale NFT on Youngparrot to
          join the club. 
        </p>
      </header>
      <Ordinals id="sats" />
      <div className="home-video">
        <div className="home-container05">
          <button className="home-button3 start-button button">
            <span className="home-text09">ENTER WHALEVERSE</span>
          </button>
        </div>
      </div>
      <div className="home-featured">
        <div className="home-header1">
          <h2 className="home-title1 heading">HOLDER PRIVILLAGES</h2>
          <div className="home-link3">
            <div className="link">
              <span className="home-caption">5+ Utilities</span>
              <svg viewBox="0 0 1024 1024" className="home-icon10">
                <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="home-list">
          <div className="home-work">
            <img
              alt="image"
              src="/sgiutryioduopsi-1500w.png"
              className="home-image5"
            />
            <div className="home-details">
              <div className="home-header2">
                <div className="home-heading">
                  <span className="home-text10">STAKE BWYC</span>
                  <Link rootClassName="link-root-class-name"></Link>
                </div>
                <span className="home-text11">
                  <span className="home-text12">
                    Each Whale has an equivalent value to the Utility Token.
                    Staking #Whale NFT Locks them thus reducing tradable supply,
                    while 
                  </span>
                  <br></br>
                  <span>still rewarding the owner.</span>
                  <br></br>
                </span>
              </div>
              <div className="home-tags">
                <div className="home-container06">
                  <span className="home-tag tag">About Staking</span>
                </div>
                <div className="home-container07">
                  <span className="home-tag1 tag">Strategy</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-work1">
            <img alt="image" src="/wsrd-400w.png" className="home-image6" />
            <div className="home-details01">
              <div className="home-header3">
                <div className="home-heading1">
                  <span className="home-text16">Whalecard pass</span>
                  <div className="link">
                    <span className="home-caption1">Claim Whalecard!</span>
                    <svg viewBox="0 0 1024 1024" className="home-icon12">
                      <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
                <span className="home-text17">
                  16 Locations across whaleverse, The pyramids, the Hot Burning
                  Lava from the past, Blazing sands of Egypt and The Mutant
                  City. Travel accros this mysterious locations and cross-chains
                  to worlds unkown
                </span>
              </div>
              <div className="home-tags1">
                <div className="home-container08">
                  <span className="home-tag2 tag">About Cards</span>
                </div>
                <div className="home-container09">
                  <span className="home-tag3 tag">Strategy</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-work2">
            <img
              alt="image"
              src="/z%20(109)-400w.png"
              className="home-image7"
            />
            <div className="home-details02">
              <div className="home-header4">
                <div className="home-heading2">
                  <span className="home-text18">Whale mutants</span>
                  <Link rootClassName="link-root-class-name2"></Link>
                </div>
                <span className="home-text19">
                  5000 Whale Mutants cross-chains to BNB CHAIN. They are all
                  Epic, Unique and Helps Members navigate through the BNB
                  Network and interact with whale utilities built on BNB
                </span>
              </div>
              <div className="home-tags2">
                <div className="home-container10">
                  <span className="home-tag4 tag">About Mutants</span>
                </div>
                <div className="home-container11">
                  <span className="home-tag5 tag">Strategy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-about">
        <div className="home-header5">
          <h2 className="home-company2">10,000 WHALES</h2>
          <span className="home-description1">
            10,000 Collectibles will be minted by community members, Once
            Launchpad completes a new world will be born. The Ocean. An Epic
            World on Bitcoin Blockchain where Owners will be able to inscribe
            ordinal numbers on their NFT that they own and trade on Bitcoin
            Blockchain whilst increasing liquidity for whales token.
          </span>
        </div>
        <div className="home-statistics">
          <span className="home-text20">STATS</span>
          <div className="home-statistic-list">
            <div className="home-statistic">
              <span className="home-sta">MINTED WHALES</span>
              <span className="home-sta01">4,501</span>
            </div>
            <div className="home-statistic1">
              <span className="home-sta02">HOLDERS</span>
              <span className="home-sta03">92</span>
            </div>
            <div className="home-statistic2">
              <span className="home-sta04">TRANSFERS</span>
              <span className="home-sta05">9,871</span>
            </div>
            <div className="home-statistic3">
              <span className="home-sta06">CLAIMED CARDS</span>
              <span className="home-sta07">804</span>
            </div>
            <div className="home-statistic4">
              <span className="home-sta08">STAKED WHALES</span>
              <span className="home-sta09">3,916</span>
            </div>
            <div className="home-statistic5">
              <span className="home-sta10">$WHLS HOLDERS</span>
              <span className="home-sta11">69</span>
            </div>
          </div>
        </div>
        <div className="home-container12">
          <iframe
            src="https://embed.ipfscdn.io/ipfs/bafybeihazpt6pkm4azgtupdz7hc2j3o4zpjsvtcgfq4t2keozxkss3ud6q/?contract=0x98E8B58c44e3c7f08171bb57aeD010fDF71B351E&amp;chain=%7B%22name%22%3A%22Core+Blockchain+Mainnet%22%2C%22chain%22%3A%22Core%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fcore-blockchain.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Core+Blockchain+Native+Token%22%2C%22symbol%22%3A%22CORE%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22core%22%2C%22chainId%22%3A1116%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22core-blockchain%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmeTQaBCkpbsxNNWTpoNrMsnwnAEf1wYTcn7CiiZGfUXD2%22%2C%22width%22%3A200%2C%22height%22%3A217%2C%22format%22%3A%22png%22%7D%7D&amp;clientId=678d5b0199cde588796872ea22804505&amp;theme=dark&amp;primaryColor=orange"
            id="mint"
            className="home-iframe"
          ></iframe>
        </div>
        <div className="home-client-list">
          <div className="home-header6">
            <h2 className="home-title2 heading">ROADMAP</h2>
          </div>
          <div className="home-row">
            <span className="home-text21">2023 JULY</span>
            <div className="home-list1">
              <div className="home-item service">
                <div className="home-details03">
                  <span className="home-text22">Launchpad </span>
                  <span className="home-text25">
                    Community minting of 10000 whales on youngparrtot
                  </span>
                </div>
                <svg viewBox="0 0 1024 1024" className="home-icon14">
                  <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
              <div className="home-item1 service">
                <div className="home-details04">
                  <span className="home-text24">Chatroom</span>
                  <span className="home-text25">Decentralized chatroom</span>
                </div>
                <svg viewBox="0 0 1024 1024" className="home-icon16">
                  <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
              <div className="home-item2 service">
                <div className="home-details05">
                  <span className="home-text26">Discord Gate</span>
                  <span className="home-text27">
                    Only holders can access full discord server and utilities
                  </span>
                </div>
                <svg viewBox="0 0 1024 1024" className="home-icon18">
                  <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
              <div className="home-item3 service">
                <div className="home-details06">
                  <span className="home-text28">Staking Pool</span>
                  <span className="home-text29">
                    Community members can earn the utility token by staking
                    their whale NFT.
                  </span>
                </div>
                <svg viewBox="0 0 1024 1024" className="home-icon20">
                  <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="home-row1">
            <span className="home-text30">2023 SEPTEMBER</span>
            <div className="home-list2">
              <div className="home-item4 service">
                <div className="home-details07">
                  <span className="home-text31">CARD MARKETPLACE</span>
                  <span className="home-text32">
                    A card marketplace where holders can trade cards for profit
                  </span>
                </div>
                <svg viewBox="0 0 1024 1024" className="home-icon22">
                  <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
              <div className="home-item5 service">
                <div className="home-details08">
                  <span className="home-text33">CROSS-CHAINS</span>
                  <span className="home-text34">
                    5000 Whales will cross-chains to BNB chain, Holders on CORE
                    will be airdropped with burnable ERC115 token before
                    crossing chains. 
                  </span>
                </div>
                <svg viewBox="0 0 1024 1024" className="home-icon24">
                  <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
              <div className="home-item6 service">
                <div className="home-details09">
                  <a className="home-text35" href="#sats">
                    Ordinals
                  </a>

                  <span className="home-text36">
                    BWYC will also cross chains to Bitcoin and allow Holders to
                    Inscribe Ordinals Numbers to metadata of EVM NFT. Like
                    storing the same unique asset on different chains. How
                    Awesome is that?
                  </span>
                </div>
                <svg viewBox="0 0 1024 1024" className="home-icon26">
                  <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="home-row2">
            <span className="home-text37">2023 OCTOBER</span>
            <div className="home-list3">
              <div className="home-item7 service">
                <div className="home-details10">
                  <span className="home-text38">DAO GOVERNANCE</span>
                  <span className="home-text39">
                    Members will be able to make proposals on the BWYC DAO By
                    delegating the utility token
                  </span>
                </div>
                <svg viewBox="0 0 1024 1024" className="home-icon28">
                  <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
              <div className="home-item8 service">
                <div className="home-details11">
                  <span className="home-text40">
                    <span>BLOCKCAIN</span>
                    <br></br>
                    <span>GAMING</span>
                    <br></br>
                  </span>
                  <span className="home-text45">
                    BWYC Devs are building EPIC Games for the project some will
                    include limited play to earn the Utility Token
                  </span>
                </div>
                <svg viewBox="0 0 1024 1024" className="home-icon30">
                  <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="home-footer">
        <div className="home-information">
          <div className="home-details12">
            <div className="home-header7">
              <div className="home-branding2">
                <img
                  alt="image"
                  src="/favicon-200h.png"
                  className="home-logo2"
                />
                <span className="home-company3">BWYC</span>
              </div>
              <div className="home-location">
                <span className="home-caption2">Location</span>
                <span className="home-value">
                  <span>DEEP! DEEP! DEEP! DEEP! DEEP! IN THE OCEAN </span>
                  <br></br>
                  <span>000-123</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-location1">
              <span className="home-caption3">Support</span>
              <span className="home-value1">
                Support@boredwhalesyachtclub.org
              </span>
            </div>
            <button className="home-button4 start-button button">
              <span className="home-text50">ENTER WHALESVERSE</span>
            </button>
          </div>
          <div className="home-links2">
            <span className="home-social social">Discord</span>
            <span className="home-social1 social">Twitter</span>
          </div>
        </div>
        <img
          alt="image"
          src="/z%20(517)-1500w.png"
          loading="lazy"
          className="home-image8"
        />
      </footer>
    </div>
  );
};

export default Home;
