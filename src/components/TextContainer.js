import React from "react"
import styled from "styled-components"
import Layout from "./layout"

const TextContainer = ({ caption, title, paragraph }) => {
  return (
    <Layout>
      <Container>
        <span>{caption}</span>
        <h2>{title}</h2>
        <p>{paragraph}</p>
      </Container>
    </Layout>
  )
}

export default TextContainer

const Container = styled.div`
  margin: 10vmin auto 24px;
  max-width: 1024px;

  span {
    font-family: "San Francisco", sans-serif;
    color: var(--main-blue-dark);
    font-weight: 700;
  }

  h2 {
    margin: 0.6vh 0 2vh 0;
  }

  p {
    margin-top: -1.4vh;
  }

  @media (max-width: 1124px) {
    width: 90%;
  }
`
