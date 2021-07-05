import React from "react"
import ReactTooltip from "react-tooltip"
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
	<TitleSpan>
		<span>
			<h1>Team</h1>
			<p>Meet the crew!</p>
		</span>
		<Links>
			<h2>Links</h2>
			<Button
				href="https://forms.gle/6mjonUx4DkYvzNPz6"
				target="_blank"
				data-tip="A survey that will help students find which sub-team they are interested in"
			>
				Interest Survey
			</Button>

			<br/>
			<br/>
			<br/>
			<Button
				href="https://forms.gle/mJcZsJMmQUjECLyV9"
				target="_blank"
				data-tip='For CHS students interested in joining'
			>
				Student Registration Form
			</Button>
			<ReactTooltip place="top" type="warning" effect="solid" />
		</Links>
	</TitleSpan>
	
	{/* Coaches */}
	<TitledCard>
		<TextContainer
			caption="2 Total"
			title="Coaches"
			paragraph="Our coaches allow us to do our job as students and members of the robotics club."
		/>

		<CardContainer>
			<Card name="Neil Palachuk" title="Head Coach" />
			<Card name="Stephen Knoefler" title="Assistant Coach" />
		</CardContainer>
	</TitledCard>
	
	{/* Mentors */}
	<TitledCard>
		<TextContainer
			caption="4 Total"
			title="Mentors"
			paragraph="Our mentors provide knowledge from the industry and help guide student learning."
		/>

		<CardContainer>
			<Card name="Zachary Forster" title="Programming" />
			<Card name="Patrick Naughton" title="Design" />
			<Card name="Tom Clemens" title="Manufacturing" />
			<Card name="Greg Cass" title="Design" />
		</CardContainer>
	</TitledCard>
	
	{/* Footer */}
	<Footer />
	</Layout>
)

export default TeamPage

const EnterAnimation = keyframes`
	from {
		opacity: 0;
		transform: translateY(20px);
	}

	to {
		opacity: 1;
		transform: translateY(0px);
	}
`
const TitleSpan = styled.div`
	margin: 10vmin auto;
	max-width: 768px;
	text-align: center;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	animation: ${EnterAnimation} 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);

	h1 {
		margin-top: 10px;
		margin-bottom: 10px;
		animation: ${EnterAnimation} 1s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
	}

	p {
		max-width: 700px;
		margin: 0 auto;
		animation: ${EnterAnimation} 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
	}
`

const CardContainer = styled.div`
	margin: 20px auto 50px;
	max-width: 1024px;
	display: grid;
	grid-template-columns: repeat(4, 1fr);

	@media (max-width: 1124px) {
		width: 90%;
		grid-template-columns: repeat(3, 1fr);
	}

	@media (max-width: 430px) {
		grid-template-columns: repeat(2, 1fr);
	}
`
const TitledCard = styled.div`
	opacity: 0;
	animation: ${EnterAnimation} 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
	animation-delay: 0.85s;
`

const Button = styled.a`
	border-radius: 4px;
	font-size: 1em;
	background: var(--main-blue-dark);
	font-weight: 700;
	padding: calc(6px + .7vmin) calc(18px + .87vmin);
	color: white;
`

const Links = styled.div`
	opacity: 0;
	animation: ${EnterAnimation} 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
	animation-delay: 0.5s;
`
	