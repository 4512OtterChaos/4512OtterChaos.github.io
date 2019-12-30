import React from "react"
import styled, { keyframes } from "styled-components"
import ReactPlayer from "react-player"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import TextContainer from "../components/TextContainer"
import Footer from "../components/Footer"

import LogoBox from "../images/logos/otterchaos-box.png"
import SponsorBox from "../images/logos/sponsors-blue.png"
import ForeWave from "../images/logos/WaveFront.png"
import MidWave from "../images/logos/WaveMid.png"
import BackWave from "../images/logos/WaveBack.png"

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
        Otter Chaos is a team for students, by students.
      </p>
      <p>
        We hope to inspire the community by getting more involved with FIRST Robotics.
      </p>
    </Hero>

    {/* Logo Art */}
    <Ocean>
      <WaveTertiary/>
      <WaveSecondary/>
      <WavePrimary/>
      <SponsorPanel/>
      <LogoSplash/>
      <Fade/>
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
          height="54vmin"
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
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`

const WaveHeroAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(300vh);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const WaveScrollAnimation = keyframes`
  0% {
    background-position: 0;
  }
  100% {
    background-position: -100vw;
  }
`

const WaveSwellAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2.5vmin);
  }
  100% {
    transform: translateY(0);
  }
`

const Hero = styled.div`
  margin: 7vmin auto;
  max-width: 83vmin;
  text-align: center;
  animation: ${HeroAnimation} 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);

  span {
    font-family: "Inter", sans-serif;
    font-weight: bold;
    color: var(--main-grey-dark);
    letter-spacing: 0.5em;
    animation: ${HeroAnimation} 0.8s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  h1 {
    margin: 10px 0 15px;
    animation: ${HeroAnimation} 1s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  p {
    max-width: 76vmin;
    margin: 0 auto;
    animation: ${HeroAnimation} 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  }
`
const Ocean = styled.div`
  height: 35vmin;
  width: 100%;
  margin: 45vmin 0;
  background: var(--main-blue-dark);
  animation: ${WaveHeroAnimation} 4s cubic-bezier(0.2, 0.8, 0.2, 1) 1;
`

const SponsorPanel = styled.div`
  background: url(${SponsorBox}) no-repeat;
  background-position: center;
  background-size: contain;
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 22vmin;
  top: calc(-3 * 12vmin);
  max-width: 1200px;

  @media(max-width: 1260px){
    width: 95%;
  }
`

const LogoSplash = styled.div`
  background: url(${LogoBox}) no-repeat;
  background-position: center;
  background-size: contain;
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 12vmin;
  top: calc(-7 * 12vmin - 6vmin);
  max-width: 1200px;

  @media(max-width: 1260px){
    width: 95%;
  }
`

const WavePrimary = styled.div`
  background: url(${ForeWave}) repeat-x;
  background-size: 100% 100%;
  position: relative;
  width: 100%;
  height: 12vmin;
  top: calc(-3 * 11vmin);
  animation: ${WaveScrollAnimation} 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite,
    ${WaveSwellAnimation} 5s ease-in-out 2.2s infinite;
`

const WaveSecondary = styled.div`
  background: url(${MidWave}) repeat-x;
  background-size: 100% 100%;
  position: relative;
  width: 100%;
  height: 12vmin;
  top: calc(-2 * 11vmin - 2.5vmin);
  animation: ${WaveScrollAnimation} 11s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite,
    ${WaveSwellAnimation} 6s ease-in-out 1.1s infinite;
`

const WaveTertiary = styled.div`
  background: url(${BackWave}) repeat-x;
  background-size: 100% 100%;
  position: relative;
  width: 100%;
  top: calc(-1 * 11vmin - 5vmin);
  height: 12vmin;
  animation: ${WaveScrollAnimation} 14s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite,
    ${WaveSwellAnimation} 7s ease-in-out infinite;
`

const Fade = styled.div`
  background: linear-gradient(var(--main-blue-dark), #287eff, #62a1ff 45%, var(--main-white));
  margin: -35.2vmin 0 11vmin;
  width: 100%;
  height: 60vmin;
`

const AboutSection = styled.div`
  margin-top: 80vmin;
`

const VideoContainer = styled.div`
  margin: 0px auto;
  max-width: 1024px;

  @media (max-width: 1124px) {
    width: 90%;
  }
`