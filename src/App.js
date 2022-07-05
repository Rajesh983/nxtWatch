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
  state = {isDark: false, isMenuItems: false, activeTab: 'HOME'}

  onChangingTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  onShowHideMenu = () => {
    this.setState(prevState => ({isMenuItems: !prevState.isMenuItems}))
  }

  onChangingActiveTab = id => {
    this.setState({activeTab: id})
  }

  render() {
    const {isDark, isMenuItems, activeTab} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme: isDark,
          changeTheme: this.onChangingTheme,
          isMenuItems,
          showHideMenu: this.onShowHideMenu,
          activeTab,
          changeActiveTab: this.onChangingActiveTab,
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
