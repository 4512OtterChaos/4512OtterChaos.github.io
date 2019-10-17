import React from "react"
import styled, { keyframes } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import TextContainer from "../components/TextContainer"
import Card from "../components/TeamCard"
import Footer from "../components/Footer"

const TeamPage = () => (
  <Layout>
    {/* SEO */}
    <SEO title="Team" />

    {/* Header */}
    <Header />

    {/* Hero */}
    <Hero>
      <h1>Team</h1>
      <p>Meet the crew!</p>
    </Hero>

    {/* Coaches */}
    <TextContainer
      caption="2 Total"
      title="Coaches"
      paragraph="Our coaches allow us to do our job as students and members of the robotics club."
    />

    <CardContainer>
      <Card name="Neil Palachuk" role="Head Coach" />
      <Card name="Steven Knoefler" role="Assistant Coach" />
    </CardContainer>

    {/* Mentors */}
    <TextContainer
      caption="4 Total"
      title="Mentors"
      paragraph="Our mentors help our our students with answering questions and knowledge from industry."
    />

    <CardContainer>
      <Card name="Zach Forester" role="Programming - Boeing" />
      <Card name="Patrick N." role="Design - Boeing" />
    </CardContainer>

    {/* Students */}
    <TextContainer
      caption="16 Total"
      title="Students"
      paragraph="Being a student lead organization, our students are the leaders of this team."
    />

    <CardContainer>
      <Card name="Henry Beason" role="Head Director" />
      <Card name="Nolan Brown" role="Programming Director" />
      <Card name="Ethan Zoller" role="Business Director" />
      <Card name="Moses Tran" role="Media Director" />
      <Card name="Farrel Sudrajat" role="Branding Director" />
      <Card name="Daisy Cisneros" role="Programming" />
      <Card name="Jack Landers" role="Programming" />
      <Card name="Ricardo Torres" role="Manufacturing" />
      <Card name="Fiona Carpenter" role="Manufacturing" />
      <Card name="Braeden Solorio" role="Manufacturing" />
      <Card name="Casey Deckers" role="Manufacturing" />
      <Card name="Scott Blacklock" role="Programming" />
      <Card name="Hunter Lilley" role="Manufacturing" />
      <Card name="Gregory Jabido" role="Design" />
      <Card name="Graeme Richards" role="Design" />
      <Card name="Francis Ricafrente" role="Programming" />
    </CardContainer>

    {/* Footer */}
    <Footer />
  </Layout>
)

export default TeamPage

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
    margin: 0 auto;
    animation: ${HeroAnimation} 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  }
`

const CardContainer = styled.div`
  margin: 20px auto;
  max-width: 1024px;
  display: flex;
  flex-wrap: wrap;
`
