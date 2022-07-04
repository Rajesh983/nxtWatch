import {Component} from 'react'

import Loader from 'react-loader-spinner'

import {GrClose} from 'react-icons/gr'

import {BiSearch} from 'react-icons/bi'

import Header from '../Header'

import Sidebar from '../Sidebar'

import HomeThumbnail from '../HomeThumbnail'

import ThemeContext from '../../context/ThemeContext'

import {
  BannerContainer,
  CloseButtonContainer,
  HomeBgContainer,
  HomeContainer,
  CloseButton,
  BannerImage,
  BannerPara,
  BannerButton,
  BannerHomeBgContainer,
  ThumbnailsBgContainer,
  SearchBoxAndButtonContainer,
  SearchBox,
  SearchButton,
  LoaderContainer,
  HomeVideosListContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
  FailureButton,
} from './homeStyles'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
  isEmpty: 'EMPTY',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    isDisplayHomeBanner: true,
  }

  onHidingBanner = () => {
    this.setState({isDisplayHomeBanner: false})
  }

  renderBanner = () => {
    const {isDisplayHomeBanner} = this.state

    return (
      <BannerContainer homeBanner={isDisplayHomeBanner} data-testid="banner">
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

  renderLoader = theme => (
    <LoaderContainer>
      <Loader
        type="ThreeDots"
        color={theme ? '#ffffff' : ' #181818'}
        height="50"
        width="50"
      />
    </LoaderContainer>
  )

  renderFailureView = theme => (
    <FailureContainer>
      <FailureImage
        src={
          theme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
      />
      <FailureHeading dark={theme}>Oops! Something Went Wrong</FailureHeading>
      <FailurePara>
        We are having some trouble to complete your request. Please try again.
      </FailurePara>
      <FailureButton type="button">Retry</FailureButton>
    </FailureContainer>
  )

  renderSuccessView = () => (
    <HomeVideosListContainer>Sucess View</HomeVideosListContainer>
  )

  renderFinalOutput = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.isEmpty:
        return this.renderNoVideosView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
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
                <Sidebar />
                <HomeContainer>
                  <BannerHomeBgContainer>
                    {this.renderBanner()}
                  </BannerHomeBgContainer>

                  <ThumbnailsBgContainer>
                    <SearchBoxAndButtonContainer>
                      <SearchBox
                        type="search"
                        placeholder="Search"
                        dark={isDarkTheme}
                      />
                      <SearchButton
                        type="button"
                        data-testid="searchButton"
                        dark={isDarkTheme}
                      >
                        <BiSearch color={isDarkTheme ? '#7e858e' : '#424242'} />
                      </SearchButton>
                    </SearchBoxAndButtonContainer>
                    {this.renderFailureView(isDarkTheme)}
                  </ThumbnailsBgContainer>
                </HomeContainer>
              </HomeBgContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
