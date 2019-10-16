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
  margin: 200px auto;
  max-width: 1024px;

  span {
    font-size: 16px;
    font-family: "San Francisco", sans-serif;
    color: var(--main-blue-dark);
    font-weight: 700;
  }
  h2 {
    margin: 10px 0 20px 0;
  }
`
