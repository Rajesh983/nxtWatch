import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'

import {HiFire} from 'react-icons/hi'

import {SiYoutubegaming} from 'react-icons/si'

import {RiMenuAddLine} from 'react-icons/ri'

import ThemeContext from '../../context/ThemeContext'

import {
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
} from './sidebarStyles'

const Sidebar = () => (
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
                    color={activeTab === 'TRENDING' ? '#ff0000' : '#909090'}
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
                    color={activeTab === 'GAMING' ? '#ff0000' : '#909090'}
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
                    color={activeTab === 'SAVED VIDEOS' ? '#ff0000' : '#909090'}
                  />
                  <NavItemText dark={isDarkTheme}>Saved videos</NavItemText>
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
      )
    }}
  </ThemeContext.Consumer>
)

export default Sidebar
