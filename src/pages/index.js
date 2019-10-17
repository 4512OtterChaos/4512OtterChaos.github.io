import React from "react"
import styled, { keyframes } from "styled-components"

import Layout from "../components/layout"
import Header from "../components/Header"

const IndexPage = () => (
  <Layout>
    {/* Header */}
    <Header />

    {/* Hero */}
    <Hero>
      <span>INTRODUCING OTTER CHAOS</span>
      <h1>Learning and striving for better steam</h1>
      <p>
        Otter Chaos Robotics is constantly striving for improvement in steam
        through student lead building.
      </p>
    </Hero>

    {/* Wave */}
  </Layout>
)

export default IndexPage

const HeroAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`

const Hero = styled.div`
  margin: 100px auto;
  max-width: 768px;
  text-align: center;
  animation: ${HeroAnimation} 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  span {
    font-size: 12px;
    font-family: "Inter", sans-serif;
    font-weight: bold;
    color: var(--main-grey-dark);
    letter-spacing: 8px;
    animation: ${HeroAnimation} 0.8s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  h1 {
    margin-top: 10px;
    animation: ${HeroAnimation} 1s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  p {
    max-width: 700px;
    margin: 0 auto;
    animation: ${HeroAnimation} 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  }
`
