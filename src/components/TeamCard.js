import React from "react"
import styled from "styled-components"
import Layout from "./layout"

const Header = ({ name, title }) => {
  return (
    <Layout>
      <Card>
        <Content>
          <h3>{name}</h3>
          <p>{title}</p>
        </Content>
      </Card>
    </Layout>
  )
}

export default Header

const Card = styled.div`
  background: var(--main-grey-light);
  height: 10.8vmin;
  width: 26.5vw;
  border-radius: 8px;
  margin: 0.5em 0.5em;

  @media(max-width: 1124px){
    width: 28vw;
  }

  @media(max-width: 430px){
    width: 38vw;
  }
`

const Content = styled.div`
  padding: 4px 20px;

  h3 {
    margin: calc(4px + 0.5vmin) 0 1vmin;
  }

  p {
    font-size: 1.75vmin;
    padding: 0;
    margin: 0 0;
  }
`
