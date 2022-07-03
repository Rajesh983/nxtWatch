import {Component} from 'react'

import {Link} from 'react-router-dom'

import {GrClose} from 'react-icons/gr'

import {AiFillHome} from 'react-icons/ai'

import {HiFire} from 'react-icons/hi'

import {SiYoutubegaming} from 'react-icons/si'

import {RiMenuAddLine} from 'react-icons/ri'

import Header from '../Header'

import ThemeContext from '../../context/ThemeContext'

import {
  BannerContainer,
  CloseButtonContainer,
  HomeBgContainer,
  CloseButton,
  BannerImage,
  BannerPara,
  BannerButton,
  BannerHomeBgContainer,
  SidebarContainer,
  NavItemsListContainer,
  NavItemContainer,
  NavItemText,
  ContactInfoContainer,
  ContactUsText,
  ContactInfoLogosContainer,
  ContactLogoImage,
  ContactInfoText,
  NavButton,
} from './homeStyles'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    isDisplayHomeBanner: true,
  }

  onHidingBanner = () => {
    this.setState({isDisplayHomeBanner: false})
  }

  renderBanner = () => {
    const {isDisplayHomeBanner} = this.state

    return (
      <BannerContainer homeBanner={isDisplayHomeBanner} data-testid="banner">
        <CloseButtonContainer>
          <CloseButton
            type="button"
            data-testid="close"
            onClick={this.onHidingBanner}
          >
            <GrClose />
          </CloseButton>
        </CloseButtonContainer>
        <BannerImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerPara>But Nxt Watch Premium prepaid plans with UPI</BannerPara>
        <BannerButton type="button">GET IT NOW</BannerButton>
      </BannerContainer>
    )
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, changeActiveTab, activeTab} = value

          const homeTab = activeTab === 'HOME'
          const trendTab = activeTab === 'TRENDING'
          const gameTab = activeTab === 'GAMING'
          const savedTab = activeTab === 'SAVED VIDEOS'

          const onChangeTab = event => {
            changeActiveTab(event.currentTarget.id)
          }

          return (
            <>
              <Header />
              <HomeBgContainer dark={isDarkTheme}>
                <SidebarContainer dark={isDarkTheme}>
                  <NavItemsListContainer>
                    <Link to="/" style={{textDecoration: 'none'}}>
                      <NavButton
                        type="button"
                        onClick={onChangeTab}
                        id="HOME"
                        activeBtn={homeTab}
                        dark={isDarkTheme}
                      >
                        {' '}
                        <NavItemContainer>
                          <AiFillHome
                            size="18"
                            color={activeTab === 'HOME' ? '#ff0000' : '#909090'}
                          />
                          <NavItemText dark={isDarkTheme}>Home</NavItemText>
                        </NavItemContainer>
                      </NavButton>
                    </Link>

                    <Link to="/" style={{textDecoration: 'none'}}>
                      <NavButton
                        type="button"
                        onClick={onChangeTab}
                        id="TRENDING"
                        activeBtn={trendTab}
                        dark={isDarkTheme}
                      >
                        {' '}
                        <NavItemContainer>
                          <HiFire
                            size="18"
                            color={
                              activeTab === 'TRENDING' ? '#ff0000' : '#909090'
                            }
                          />
                          <NavItemText dark={isDarkTheme}>Trending</NavItemText>
                        </NavItemContainer>
                      </NavButton>
                    </Link>

                    <Link to="/" style={{textDecoration: 'none'}}>
                      <NavButton
                        type="button"
                        onClick={onChangeTab}
                        id="GAMING"
                        activeBtn={gameTab}
                        dark={isDarkTheme}
                      >
                        {' '}
                        <NavItemContainer>
                          <SiYoutubegaming
                            size="18"
                            color={
                              activeTab === 'GAMING' ? '#ff0000' : '#909090'
                            }
                          />
                          <NavItemText dark={isDarkTheme}>Gaming</NavItemText>
                        </NavItemContainer>
                      </NavButton>
                    </Link>

                    <Link to="/" style={{textDecoration: 'none'}}>
                      <NavButton
                        type="button"
                        onClick={onChangeTab}
                        id="SAVED VIDEOS"
                        activeBtn={savedTab}
                        dark={isDarkTheme}
                      >
                        {' '}
                        <NavItemContainer>
                          <RiMenuAddLine
                            size="18"
                            color={
                              activeTab === 'SAVED VIDEOS'
                                ? '#ff0000'
                                : '#909090'
                            }
                          />
                          <NavItemText dark={isDarkTheme}>
                            Saved videos
                          </NavItemText>
                        </NavItemContainer>
                      </NavButton>
                    </Link>
                  </NavItemsListContainer>

                  <ContactInfoContainer>
                    <ContactUsText dark={isDarkTheme}>CONTACT US</ContactUsText>
                    <ContactInfoLogosContainer>
                      <ContactLogoImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                        alt="facebook logo"
                      />
                      <ContactLogoImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                        alt="twitter logo"
                      />
                      <ContactLogoImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                        alt="linked in logo"
                      />
                    </ContactInfoLogosContainer>

                    <ContactInfoText dark={isDarkTheme}>
                      Enjoy! Now to see your channels and recommendations!
                    </ContactInfoText>
                  </ContactInfoContainer>
                </SidebarContainer>
                <BannerHomeBgContainer>
                  {this.renderBanner()}
                </BannerHomeBgContainer>
              </HomeBgContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
