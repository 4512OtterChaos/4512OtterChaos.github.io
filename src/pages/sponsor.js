import React from "react"
import styled, { keyframes } from "styled-components"
import ReactPlayer from "react-player"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import Footer from "../components/Footer"
import TextContainer from "../components/TextContainer"
import BenefitCard from "../components/BenefitCard"

// Benefit Icons
import Shirt from "../images/shirt.svg"
import Robot from "../images/robot.svg"
import Money from "../images/money.svg"
import Building from "../images/building.svg"
import Website from "../images/website.svg"
import Social from "../images/social.svg"

const SponsorPage = () => (
  <Layout>
    {/* SEO */}
    <SEO title="Sponsor" />

    {/* Header */}
    <Header />

    {/* Hero */}
    <Hero>
      <h1>Sponsor</h1>
      <p>Interested in sponsoring? Learn more here!</p>
      <Button href="https://sites.google.com/site/bruincommunityparents/donate">
        Become a sponsor
      </Button>
    </Hero>

    {/* Introduction Video */}
    <TextContainer
      caption="Introduction Video"
      title="Building a brighter future"
      paragraph="This game for the 2019 FIRST Robotics Competition. The game involves two alliances of three teams each competing to place hatch covers and rubber 
      balls or “cargo” on rockets and cargo ships before returning to their hab platform to climb at the end of the match."
    />

    <VideoContainer>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=6R0nl--VB6g"
        width="100%"
        height="500px"
      />
    </VideoContainer>

    {/* Benefits Video */}
    <TextContainer
      caption="Perks"
      title="Benefits of sponsoring"
      paragraph="This game for the 2019 FIRST Robotics Competition. The game involves two alliances of three teams each competing to place hatch covers and rubber 
      balls or “cargo” on rockets and cargo ships before returning to their hab platform to climb at the end of the match."
    />

    <CardContainer>
      <BenefitCard
        img={Shirt}
        alt="Apparel"
        title="Branding Promotion"
        text="Get your brand logo showcased on our robot and banners."
      />
      <BenefitCard
        img={Robot}
        alt="Robot"
        title="Robot Demonstrations"
        text="Invite us to showcase and drive our robots at your company."
      />
      <BenefitCard
        img={Money}
        alt="Money"
        title="Tax Deductible"
        text="Since FirstWA is an 501(c)(3) organization that allows for sponsorships  to be partially tax deductible."
      />
      <BenefitCard
        img={Building}
        alt="Building"
        title="Helping the community"
        text="Create the community you aspire to build."
      />
      <BenefitCard
        img={Website}
        alt="Website"
        title="Website Promotion"
        text="Get your brand logo promoted on our website home page."
      />
      <BenefitCard
        img={Social}
        alt="Instagram"
        title="Social Media Promotion"
        text="Get your brand logo promoted through our social media posts."
      />
    </CardContainer>

    {/* Footer */}
    <Footer />
  </Layout>
)

export default SponsorPage

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

  h1 {
    margin-top: 10px;
    margin-bottom: 10px;
    animation: ${HeroAnimation} 1s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  p {
    max-width: 700px;
    margin: 0 auto 20px;
    animation: ${HeroAnimation} 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  }
`

const VideoContainer = styled.div`
  margin: 35px auto;
  max-width: 1024px;
`

const CardContainer = styled.div`
  margin: 20px auto;
  max-width: 1024px;
  display: flex;
  flex-wrap: wrap;
`

const Button = styled.a`
  border-radius: 4px;
  background: var(--main-blue-dark);
  font-size: 14px;
  font-weight: 700;
  padding: 12px 16px;
  color: white;
`
