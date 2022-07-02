import './App.css'

import {Component} from 'react'

import {Route} from 'react-router-dom'

import ThemeContext from './context/ThemeContext'

import LoginForm from './components/LoginForm'

import Home from './components/Home'

// Replace your code here
class App extends Component {
  state = {isDark: false}

  onChangingTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state
    return (
      <ThemeContext.Provider
        value={{isDarkTheme: isDark, changeTheme: this.onChangingTheme}}
      >
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/" component={Home} />
      </ThemeContext.Provider>
    )
  }
}

export default App
