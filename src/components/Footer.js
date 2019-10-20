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
        <a href="mailto:otterchaos4512@gmail.com" target="_blank">
          <Button>
            <img src={Email} alt="Email Envelope" />
          </Button>
        </a>
      </Footer>
    </Layout>
  )
}

export default Header

const Footer = styled.div`
  margin: 200px auto;
  max-width: 200px;
  display: flex;
`

const Button = styled.div`
  width: 48px;
  height: 48px;
  background: var(--main-grey-light);
  border-radius: 100%;
  margin: 0 8px;

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    height: 95%;
    width: 24px;
  }
`
