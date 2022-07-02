import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
  min-height: 100vh;
  background-size: cover;
`

export const BannerContainer = styled.div`
  display: ${props => (props.display ? 'flex' : 'none')};
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
