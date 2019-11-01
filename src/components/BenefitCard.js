import React from "react"
import styled from "styled-components"
import Layout from "./layout"

const Header = ({ title, text, img, alt }) => {
  return (
    <Layout>
      <Card>
        <Content>
          <img src={img} alt={alt} />
          <h3>{title}</h3>
          <p>{text}</p>
        </Content>
      </Card>
    </Layout>
  )
}

export default Header

const Card = styled.div`
  background: var(--main-grey-light);
  height: 180px;
  width: 330px;
  border-radius: 8px;
  margin: 8px 8px 0 0;

  @media (max-width: 1024px) {
    width: 90%;
    margin: 0 auto 24px;
  }

  @media (max-width: 420px) {
    width: 100;
  }
`

const Content = styled.div`
  padding: 30px 20px;

  h3 {
    font-size: 16px;
  }

  p {
    font-size: 16px;
    padding: 0;
    margin: -15px 0;
    line-height: 22px;
  }
`
