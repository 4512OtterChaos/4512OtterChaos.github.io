import React from "react"
import styled, { keyframes } from "styled-components"
import ReactPlayer from "react-player"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import TextContainer from "../components/TextContainer"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    {/* SEO */}
    <SEO title="Home" />

    {/* Header */}
    <Header />

    {/* Hero */}
    <Hero>
      <span>INTRODUCING OTTER CHAOS</span>
      <h1>Learning and striving for better STEAM</h1>
      <p>
        Otter Chaos Robotics is constantly striving for improvement in STEAM
        through student led building.
      </p>
    </Hero>

    {/* Wave */}
    <Ocean>
      <WavePrimary />
      <WaveSecondary />
    </Ocean>

    {/* About */}
    <AboutSection>
      <TextContainer
        caption="About"
        title="Meet Otter Chaos"
        paragraph="We strive for learning and improving STEAM through our students by building robots! We are comprised of students from both Cascade and Everett high school."
      />
      <VideoContainer>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ah7CxGuOUOo"
          width="100%"
          height="500px"
        />
      </VideoContainer>
    </AboutSection>

    {/* Footer */}
    <Footer />
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

const WaveAnimation = keyframes`
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1600px;
  }
`

const SwellAnimation = keyframes`
  0%, 100% {
    transform: translate3d(0,-25px,0);
  }
  50% {
    transform: translate3d(0,5px,0);
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
    margin: 10px 0 15px;
    animation: ${HeroAnimation} 1s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  p {
    max-width: 700px;
    margin: 0 auto;
    animation: ${HeroAnimation} 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  @media (max-width: 420px) {
    width: 90%;

    h1 {
      font-size: 58px;
    }
  }
`

const Ocean = styled.div`
  height: 5%;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #015871;

  @media (max-width: 420px) {
    display: none;
  }
`

const WavePrimary = styled.div`
  background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg")
    repeat-x;
  position: absolute;
  top: -198px;
  width: 6400px;
  height: 198px;
  animation: ${WaveAnimation} 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
`

const WaveSecondary = styled.div`
  background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg")
    repeat-x;
  position: absolute;
  top: -175px;
  width: 6400px;
  height: 198px;
  animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
    ${SwellAnimation} 7s ease -1.25s infinite;
  opacity: 1;
  transform: translate3d(0, 0, 0);
`

const AboutSection = styled.div`
  margin-top: 625px;

  @media (max-width: 420px) {
    margin-top: 100px;
  }
`

const VideoContainer = styled.div`
  margin: 35px auto;
  max-width: 1024px;

  @media (max-width: 1024px) {
    width: 90%;
    margin: 0 auto;
  }
`
