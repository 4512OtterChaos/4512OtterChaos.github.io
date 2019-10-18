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
  height: 100px;
  width: 245px;
  border-radius: 8px;
  margin: 8px 8px 0 0;
`

const Content = styled.div`
  padding: 4px 20px;

  p {
    padding: 0;
    margin: -15px 0;
  }
`
