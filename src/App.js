import './App.css'

import {Component} from 'react'

import {Route} from 'react-router-dom'

import ThemeContext from './context/ThemeContext'

import LoginForm from './components/LoginForm'

import Home from './components/Home'

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
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/" component={Home} />
      </ThemeContext.Provider>
    )
  }
}

export default App
