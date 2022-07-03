import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  changeTheme: () => {},
  isMenuItems: false,
  showHideMenu: () => {},
  activeTab: 'HOME',
  changeActiveTab: () => {},
})

export default ThemeContext
