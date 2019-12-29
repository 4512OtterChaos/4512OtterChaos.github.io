import React from "react"
import styled, { keyframes } from "styled-components"
import ReactPlayer from "react-player"
import ReactTooltip from "react-tooltip"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import Footer from "../components/Footer"
import TextContainer from "../components/TextContainer"
import BenefitCard from "../components/BenefitCard"

// Benefit Icons
import Shirt from "../images/icons/shirt.svg"
import Robot from "../images/icons/robot.svg"
import Money from "../images/icons/money.svg"
import Building from "../images/icons/building.svg"
import Website from "../images/icons/website.svg"
import Social from "../images/icons/social.svg"
import Resources from "../images/icons/resources.svg"
import Mentors from "../images/icons/mentors.svg"

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
      <Button
        href="https://sites.google.com/site/bruincommunityparents/donate"
        target="_blank"
        data-tip='Please specify "For CHS Robotics Team"'
        onClick={e => window.alert('Please specify "For CHS Robotics Team"')}
      >
        Become a sponsor
      </Button>
      <ReactTooltip place="bottom" type="success" effect="float" />
    </Hero>

    {/* Introduction Video */}
    <TextContainer
      caption="Introduction Video"
      title="Building a brighter future"
      paragraph='Combining the excitement of sport with the rigors of science and technology. We call FIRST Robotics Competition the ultimate Sport for the Mind. High-school student participants call it “the hardest fun you’ll ever have."'
    />

    <VideoContainer>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=6R0nl--VB6g"
        width="100%"
        height="54vmin"
      />
    </VideoContainer>

    {/* Benefits Video */}
    <TextContainer
      caption="Perks"
      title="Benefits of sponsoring"
      paragraph="We want to support our sponsors as much as they support us, here are some ways we are able to return the favor to our sponsors!"
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
        text="As a 501(c)(3) organization, FirstWA allows sponsorships to be tax deductible."
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

    {/* What we need */}
    <TextContainer
      caption="Needs"
      title="What we are looking for"
      paragraph="We need many resources for our upcoming season to be possible-- here are some of the major needs."
    />

    <CardContainer>
      <BenefitCard
        img={Money}
        alt="Money"
        title="Money"
        text="Our major need is money to pay for parts, travel, apparel, and much more to maintain the team."
      />
      <BenefitCard
        img={Mentors}
        alt="Mentors"
        title="Mentors"
        text="Having knowledgable people from industry to help our students is a huge help."
      />
      <BenefitCard
        img={Resources}
        alt="Resources"
        title="Resources"
        text="We also look for spare parts, tools, and other resources in order to enable our students to build."
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
  margin: 10vmin auto;
  max-width: 83vmin;
  text-align: center;
  animation: ${HeroAnimation} 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);

  h1 {
    margin-top: 10px;
    margin-bottom: 10px;
    animation: ${HeroAnimation} 1s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  p {
    max-width: 90%;
    margin: 0 auto calc(10px + 2.2vmin);
    animation: ${HeroAnimation} 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  }
`

const VideoContainer = styled.div`
  margin: 35px auto;
  max-width: 1024px;

  @media (max-width: 1124px) {
    width: 90%;
  }
`

const CardContainer = styled.div`
  margin: 20px auto;
  max-width: 1024px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1124px) {
    width: 90%;
    margin: 0 auto;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 420px) {
    margin-bottom: calc(40px + 6.5vmin);
  }
`

const Button = styled.a`
  border-radius: 4px;
  font-size: 1em;
  background: var(--main-blue-dark);
  font-weight: 700;
  padding: calc(6px + .7vmin) calc(8px + .87vmin);
  color: white;
`
