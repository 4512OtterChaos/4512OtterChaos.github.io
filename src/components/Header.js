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
            <Link to="/media">Media</Link>
            <Link to="/sponsor">Sponsor</Link>
            <Link to="/team">Team</Link>
            <Link to="/resources">Resources</Link>
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
  height: 65px;
  border-bottom: 1px var(--main-grey-light) solid;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  height: 100%;

  img {
    width: 40px;
  }

  @media (max-width: 1024px) {
    width: 90%;
  }
`

const Links = styled.div`
  text-align: right;

  a {
    font-size: 14px;
    text-transform: uppercase;
    margin-left: 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`
