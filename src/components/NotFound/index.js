import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'

import Sidebar from '../Sidebar'

import {
  NotFoundBgContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundPara,
} from './notFoundStyles'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          <Header />
          <NotFoundBgContainer dark={isDarkTheme}>
            <Sidebar />
            <NotFoundContainer>
              <NotFoundImage
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt="not found"
              />
              <NotFoundHeading dark={isDarkTheme}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundPara>
                We are sorry, the page you requested could not be found.
              </NotFoundPara>
            </NotFoundContainer>
          </NotFoundBgContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
