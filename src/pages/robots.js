import React from "react"
import styled, { keyframes } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import TextContainer from "../components/TextContainer"
import Footer from "../components/Footer"

// Robot Images
import Pneutron from "../images/graphics/pneutron.png"
import Pneutron2 from "../images/graphics/pneutron2.png"
import Dugg from "../images/graphics/dugg.png"
import Dugg2 from "../images/graphics/dugg2.png"

const RobotsPage = () => (
  <Layout>
    {/* SEO */}
    <SEO title="Robots" />

    {/* Header */}
    <Header />

    {/* Hero */}
    <Hero>
      <h1>Robots</h1>
      <p>
        If you want to learn more about the specifics,{" "}
        <a href="/contact">contact us!</a>
      </p>
    </Hero>

    <TextContainer
      caption="Destination Deep Space - 2019"
      title="Pneutron"
      paragraph="This robot was for the 2019 FIRST Robotics Competition. The game involves two alliances of three teams each competing to place hatch covers and rubber 
balls or “cargo” on rockets and cargo ships before returning to their hab platform to climb at the end of the match."
    />

    <RobotImages>
      <img src={Pneutron} alt="Robot Front View" />
      <img src={Pneutron2} alt="Robot Back View" />
    </RobotImages>

    <TextContainer
      caption="Power Up - 2018"
      title="DUGG"
      paragraph="This robot was for the 2018 FIRST Robotics Competition. The game involves two alliances of three teams each competing to place power cubes on large balancing scales to tip the scale to gain ownership or trade them in for powerups in order to win."
    />

    <RobotImages>
      <img src={Dugg} alt="Robot Front View" />
      <img src={Dugg2} alt="Robot Back View" />
    </RobotImages>

    {/* Footer */}
    <Footer />
  </Layout>
)

export default RobotsPage

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
  margin: 10vmin auto;
  max-width: 768px;
  text-align: center;
  animation: ${HeroAnimation} 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);

  h1 {
    margin-top: 10px;
    margin-bottom: 10px;
    animation: ${HeroAnimation} 1s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  p {
    max-width: 700px;
    margin: 0 auto;
    animation: ${HeroAnimation} 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  }
`

const RobotImages = styled.div`
  margin: 0 auto 24px;
  max-width: 1024px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  img {
    width: 100%;
  }
`
