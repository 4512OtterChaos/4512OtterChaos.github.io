import React from "react"
import styled from "styled-components"
import Layout from "./layout"

// Social Icons
import Instagram from "../images/icons/instagram.svg"
import Youtube from "../images/icons/youtube.svg"
import Email from "../images/icons/email.svg"

const Header = () => {
  return (
    <Layout>
      <Footer>
        <a
          href="https://www.instagram.com/otterchaos4512/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>
            <img src={Instagram} alt="Instagram" />
          </Button>
        </a>
        <a
          href="https://www.youtube.com/user/Bearbots"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>
            <img src={Youtube} alt="Youtube" />
          </Button>
        </a>
        <a href="mailto:otterchaos4512@gmail.com" target="_blank" rel="noopener noreferrer">
          <Button>
            <img src={Email} alt="Email Envelope" />
          </Button>
        </a>
      </Footer>
      <Attribution>
        <p>Icons made by <a href="https://fontawesome.com/" title="Font Awesome">Font Awesome</a>
        <br />
        <br />
        <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
          <img alt="Creative Commons License" src="https://i.creativecommons.org/l/by/4.0/88x31.png" />
        </a></p>
      </Attribution>
    </Layout>
  )
}

export default Header

const Footer = styled.div`
  margin: 21.6vmin auto 8vmin;
  max-width: calc(3 * calc(24px + 2.6vmin + 3vw));
  display: flex;
`

const Button = styled.div`
  width: calc(24px + 2.6vmin);
  height: calc(24px + 2.6vmin);
  background: var(--main-grey-light);
  border-radius: 100%;
  margin: 0 1.5vw;

  img {
    display: block;
    margin: 0 auto;
    width: 50%;
    height: 95%;
  }
`

const Attribution = styled.div`
  margin: 0 auto;
  text-align: center;
  
  p{
    font-size: 1.5vmin;
    opacity: 0.7;
  }

  a{
    font-size: 1.5vmin;
    opacity: 0.7;
  }
`
