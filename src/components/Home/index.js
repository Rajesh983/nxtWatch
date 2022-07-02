import {Component} from 'react'

import {GrClose} from 'react-icons/gr'

import Header from '../Header'

import ThemeContext from '../../context/ThemeContext'

import {
  BannerContainer,
  CloseButtonContainer,
  HomeBgContainer,
  CloseButton,
  BannerImage,
  BannerPara,
  BannerButton,
} from './homeStyles'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    isDisplayHomeBanner: 'display',
  }

  onHidingBanner = () => {
    this.setState({isDisplayHomeBanner: ''})
  }

  renderBanner = () => {
    const {isDisplayHomeBanner} = this.state

    return (
      <BannerContainer display={isDisplayHomeBanner} data-testid="banner">
        <CloseButtonContainer>
          <CloseButton
            type="button"
            data-testid="close"
            onClick={this.onHidingBanner}
          >
            <GrClose />
          </CloseButton>
        </CloseButtonContainer>
        <BannerImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerPara>But Nxt Watch Premium prepaid plans with UPI</BannerPara>
        <BannerButton type="button">GET IT NOW</BannerButton>
      </BannerContainer>
    )
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <Header />
              <HomeBgContainer dark={isDarkTheme}>
                {this.renderBanner()}
              </HomeBgContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
