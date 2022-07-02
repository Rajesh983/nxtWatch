import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {BiSun} from 'react-icons/bi'

import {IoMoon} from 'react-icons/io5'

import {FiMenu, FiLogOut} from 'react-icons/fi'

import ThemeContext from '../../context/ThemeContext'

import {
  NavbarContainer,
  WebsiteLogo,
  IconsContainer,
  IconButton,
  LogoutIconButton,
  MenuLogoutIconsContainer,
  ProfileLogoutDesktopContainer,
  ProfileImage,
  LogoutDesktopButton,
} from './headerStyles'

const Header = props => {
  const onClickLogout = () => {
    console.log('Clicked')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <NavbarContainer dark={isDarkTheme}>
            <WebsiteLogo
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
            <IconsContainer>
              {isDarkTheme ? (
                <IconButton type="button" data-testid="theme">
                  <BiSun size="25px" color="#ffffff" />
                </IconButton>
              ) : (
                <IconButton type="button" data-testid="theme">
                  <IoMoon size="25px" />
                </IconButton>
              )}

              <MenuLogoutIconsContainer>
                <FiMenu
                  size="25px"
                  color={isDarkTheme ? '#ffffff' : '#0f0f0f'}
                />
                <LogoutIconButton type="button" onClick={onClickLogout}>
                  <FiLogOut
                    size="25px"
                    color={isDarkTheme ? '#ffffff' : '#0f0f0f'}
                  />
                </LogoutIconButton>
              </MenuLogoutIconsContainer>

              <ProfileLogoutDesktopContainer>
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <LogoutDesktopButton
                  type="button"
                  dark={isDarkTheme}
                  onClick={onClickLogout}
                >
                  Logout
                </LogoutDesktopButton>
              </ProfileLogoutDesktopContainer>
            </IconsContainer>
          </NavbarContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
