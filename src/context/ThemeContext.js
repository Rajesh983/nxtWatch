import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  changeTheme: () => {},
  isMenuItems: false,
  showHideMenu: () => {},
  activeTab: 'HOME',
  changeActiveTab: () => {},
  isLiked: false,
  changeLikeStatus: () => {},
  isDisliked: false,
  changeDislikeStatus: () => {},
  savedVideos: [],
  addToSavedVideos: () => {},
})

export default ThemeContext
