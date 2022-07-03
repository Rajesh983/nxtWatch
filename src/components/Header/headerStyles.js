import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  background-color: ${props => (props.dark ? ' #231f20' : '#ffffff')};
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 7px;
  padding-right: 7px;

  @media screen and (min-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

export const WebsiteLogo = styled.img`
  height: 23px;
  width: 95px;
`
export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 110px;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 160px;
  }
`
export const IconButton = styled.button`
  background-color: transparent;
  border-width: 0;
`
export const LogoutIconButton = styled.button`
  background-color: transparent;
  border-width: 0;
`
export const MenuLogoutIconsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 70px;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ProfileLogoutDesktopContainer = styled.div`
  display: flex;
  align-items: center;
  width: 110px;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const ProfileImage = styled.img`
  height: 26px;
  width: 26px;
`
export const LogoutDesktopButton = styled.button`
  background-color: transparent;
  border: 1.5px solid ${props => (props.dark ? '#ffffff' : '#4f46e5')};
  color: ${props => (props.dark ? '#ffffff' : '#4f46e5')};
  border-radius: 3px;
  padding: 5px;
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 500;
  padding-left: 12px;
  padding-right: 12px;
`

export const MenuItemsContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
  background-color: ${props => (props.dark ? ' #231f20' : '#ffffff')};
  margin-top: 0;
  margin-bottom: 0;
  padding: 20px;
  padding-left: 30px;
  display: ${props => (props.menu ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const MenuItem = styled.li`
  color: ${props => (props.dark ? '#ffffff' : '#231f20')};
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 400;
  text-decoration: underline;
  margin-bottom: 3px;
`
