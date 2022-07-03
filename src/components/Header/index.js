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
  MenuItemsContainer,
  MenuItem,
} from './headerStyles'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, changeTheme, isMenuItems, showHideMenu} = value

        const onChangeTheme = () => {
          changeTheme()
        }

        const onShowMenu = () => {
          showHideMenu()
        }

        return (
          <>
            <NavbarContainer dark={isDarkTheme}>
              <Link to="/">
                <WebsiteLogo
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
              </Link>
              <IconsContainer>
                {isDarkTheme ? (
                  <IconButton
                    type="button"
                    data-testid="theme"
                    onClick={onChangeTheme}
                  >
                    <BiSun size="25px" color="#ffffff" />
                  </IconButton>
                ) : (
                  <IconButton
                    type="button"
                    data-testid="theme"
                    onClick={onChangeTheme}
                  >
                    <IoMoon size="25px" />
                  </IconButton>
                )}

                <MenuLogoutIconsContainer>
                  <IconButton type="button" onClick={onShowMenu}>
                    {' '}
                    <FiMenu
                      size="25px"
                      color={isDarkTheme ? '#ffffff' : '#0f0f0f'}
                    />
                  </IconButton>
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

            <MenuItemsContainer dark={isDarkTheme} menu={isMenuItems}>
              <Link to="/">
                {' '}
                <MenuItem id="HOME" key="HOME" dark={isDarkTheme}>
                  Home
                </MenuItem>
              </Link>

              <Link to="/trending">
                <MenuItem id="TRENDING" key="TRENDING" dark={isDarkTheme}>
                  Trending
                </MenuItem>
              </Link>

              <Link to="/gaming">
                <MenuItem id="GAMING" key="GAMING" dark={isDarkTheme}>
                  Gaming
                </MenuItem>
              </Link>

              <Link to="/saved-videos">
                <MenuItem
                  id="SAVED VIDEOS"
                  key="SAVED VIDEOS"
                  dark={isDarkTheme}
                >
                  Saved Videos
                </MenuItem>
              </Link>
            </MenuItemsContainer>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
