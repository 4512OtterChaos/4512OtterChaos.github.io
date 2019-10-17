import React from "react"
import styled, { keyframes } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import Footer from "../components/Footer"

const ResourcePage = () => (
  <Layout>
    {/* SEO */}
    <SEO title="Resources" />

    {/* Header */}
    <Header />

    {/* Hero */}
    <Hero>
      <h1>Resources</h1>
      <p>
        Want to learn more? <a href="/contact">Contact us!</a>
      </p>
    </Hero>

    {/* Footer */}
    <Footer />
  </Layout>
)

export default ResourcePage

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

    a {
      font-size: 20px;
      color: var(--main-blue-dark);
      line-height: 30px;
      animation: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }

    a:hover {
      color: var(--main-blue);
    }
  }
`
