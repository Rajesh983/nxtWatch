import './App.css'

import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import ThemeContext from './context/ThemeContext'

import ProtectedRoute from './components/ProtectedRoute'

import LoginForm from './components/LoginForm'

import Home from './components/Home'

import Trending from './components/Trending'

import Gaming from './components/Gaming'

import VideoItemDetails from './components/VideoItemDetails'

// Replace your code here
class App extends Component {
  state = {
    isDark: false,
    isMenuItems: false,
    activeTab: 'HOME',
    isLiked: false,
    isDisliked: false,
    savedVideos: [],
  }

  onChangingTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  onShowHideMenu = () => {
    this.setState(prevState => ({isMenuItems: !prevState.isMenuItems}))
  }

  onChangingActiveTab = id => {
    this.setState({activeTab: id})
  }

  onClickingLikeButton = () => {
    this.setState({isLiked: true, isDisliked: false})
  }

  onClickingDislikeButton = () => {
    this.setState({isLiked: false, isDisliked: true})
  }

  onAddingToSavedVideos = saveItem => {
    const {savedVideos} = this.state
    const itemIndex = savedVideos.findIndex(
      eachVid => eachVid.id === saveItem.id,
    )
    if (itemIndex === -1) {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, saveItem],
      }))
    } else {
      const filteredVideos = savedVideos.filter(
        eachVid => eachVid.id !== saveItem.id,
      )
      this.setState({savedVideos: filteredVideos})
    }
  }

  render() {
    const {
      isDark,
      isMenuItems,
      activeTab,
      isLiked,
      isDisliked,
      savedVideos,
    } = this.state

    console.log(savedVideos)
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme: isDark,
          changeTheme: this.onChangingTheme,
          isMenuItems,
          showHideMenu: this.onShowHideMenu,
          activeTab,
          changeActiveTab: this.onChangingActiveTab,
          isLiked,
          isDisliked,
          changeLikeStatus: this.onClickingLikeButton,
          changeDislikeStatus: this.onClickingDislikeButton,
          savedVideos,
          addToSavedVideos: this.onAddingToSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
