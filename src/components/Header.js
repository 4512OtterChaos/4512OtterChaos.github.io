import React from "react"
import styled from "styled-components"
import Layout from "./layout"
import { Link } from "gatsby"

const Header = () => {
  return (
    <Layout>
      <Heading>
        <Container>
          <Link to="/">
            <img
              src={require("../images/logos/logo.svg")}
              alt="Otter Chaos Logo"
            />
          </Link>
          <Links>
            <Link to="/robots">Robots</Link>
            <Link to="/sponsor">Sponsor</Link>
            <Link to="/team">Team</Link>
            <a href="https://otterchaos4512.launchcart.store/">Shop</a>
            <Link to="/contact">Contact</Link>
          </Links>
        </Container>
      </Heading>
    </Layout>
  )
}

export default Header

const Heading = styled.div`
  width: 100%;
  height: calc(45px + 3.8vmin);
  border-bottom: 2px var(--main-grey-light) solid;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  height: 100%;

  img {
    width: calc(40px + 2.7vmin);
  }

  @media (max-width: 1124px) {
    width: 90%;
  }
`

const Links = styled.div`
  text-align: right;

  a {
    font-size: calc(6px + .87vmin);
    text-transform: uppercase;
    margin-left: 20px;
  }
`
