import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
  min-height: 94vh;
  background-size: cover;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export const BannerContainer = styled.div`
  display: ${props => (props.homeBanner ? 'flex' : 'none')};
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  flex-direction: column;
  background-size: cover;
  justify-content: center;
  align-items: flex-start;
  padding: 19px;
`
export const CloseButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border-width: 0;
`

export const BannerImage = styled.img`
  height: 30px;
  width: 100px;
`
export const BannerPara = styled.p`
  color: #1e293b;
  font-size: 15px;
  font-weight: 400;
  font-family: 'Roboto';
  width: 200px;
  line-height: 25px;

  @media screen and (min-width: 576px) {
    width: 300px;
  }
`
export const BannerButton = styled.button`
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #1e293b;
  background-color: transparent;
  border: 1.5px solid #1e293b;
  padding: 7px;
`

export const BannerHomeBgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-grow: 1;
`

export const ThumbnailsBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  width: 100%;
`

export const SearchBoxAndButtonContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1.5px solid #909090;
  height: 28px;
`

export const SearchBox = styled.input`
  background-color: transparent;
  border-width: 0;
  width: 230px;
  @media screen and (min-width: 576px) {
    width: 350px;
  }
  padding-left: 9px;
  :focus {
    outline-width: 0;
  }
  color: ${props => (props.dark ? '#ffffff' : '#909090')};
`

export const SearchButton = styled.button`
  background-color: ${props => (props.dark ? '#383838' : '#f9f9f9')};
  border-width: 0;
  border-left: 1.5px solid #909090;
  height: 26px;
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HomeVideosListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
`

export const LoaderContainer = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1000px;
`
