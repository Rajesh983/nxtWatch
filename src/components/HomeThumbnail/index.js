import ThemeContext from '../../context/ThemeContext'

const HomeThumbnail = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
    }}
  </ThemeContext.Consumer>
)

export default HomeThumbnail
