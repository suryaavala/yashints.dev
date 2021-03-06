import React, {
  useState,
  useEffect,
  useContext,
} from 'react'
import { withPrefix } from 'gatsby'
import { ThemeContext } from 'Common'
import Navbar from './Navbar'
import Hamburger from './Hamburger'
import Sidebar from './Sidebar'
import { Wrapper, Overlay } from './styles'

export const Header = () => {
  const [isHomePage, setHomePage] = useState(
    false
  )
  const [sidebar, setSidebar] = useState(false)
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    if (location.pathname === withPrefix('/')) {
      setHomePage(!isHomePage)
      //console.log(isHomePage)
    }
  }, {})

  const toggle = () => setSidebar(!sidebar)

  return (
    <Wrapper theme={theme}>
      <Overlay
        sidebar={sidebar}
        onClick={toggle}
      />
      <Navbar />
      <Hamburger
        isHomePage={isHomePage}
        sidebar={sidebar}
        toggle={toggle}
      />
      <Sidebar
        sidebar={sidebar}
        toggle={toggle}
      />
    </Wrapper>
  )
}
