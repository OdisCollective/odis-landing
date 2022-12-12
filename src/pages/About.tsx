import React from 'react'
import styled from 'styled-components'
import {SectionContainer, SectionTitle, SectionParagraph} from '../components/Section/Section'

const PageWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
  flex: 1;
`

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  border-radius: 64px;
  padding: 16px 48px;
`

const ProfileIcon = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 3px solid #16c0f5;
  margin-right: 16px;
`

const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
`

const Name = styled.div`
  color: black;
`

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: black;
`

const Expertise = styled.div``

interface UserProfileProps {
  name: string
  twitter_handle?: string
  github_handle?: string
  medium_handle?: string
}

const SpecificSocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 8px;
`

const SocialMediaName = styled.div`
  font-weight: bold;
`

const ClickableUserHandle = styled.a``

interface UserSocialMediaProps {
  twitter_handle?: string
  github_handle?: string
  medium_handle?: string
}

enum SocialMediaPrefixes {
  TWITTER = 'https://www.twitter.com/',
  GITHUB = 'https://www.github.com/',
  MEDIUM = 'https://www.medium.com/',
}

const UserSocialMedia = ({twitter_handle, github_handle, medium_handle}: UserSocialMediaProps) => {
  const TwitterProfileLink = twitter_handle
    ? SocialMediaPrefixes.TWITTER + twitter_handle
    : undefined
  const GithubProfileLink = github_handle ? SocialMediaPrefixes.GITHUB + github_handle : undefined
  const MediumProfileLink = medium_handle ? SocialMediaPrefixes.MEDIUM + medium_handle : undefined

  console.log('TwitterProfileLink: ', TwitterProfileLink)
  return (
    <SocialMediaContainer>
      {TwitterProfileLink && (
        <SpecificSocialMedia>
          <SocialMediaName>twitter: </SocialMediaName>
          <ClickableUserHandle href={TwitterProfileLink}>@{twitter_handle}</ClickableUserHandle>
        </SpecificSocialMedia>
      )}
      {GithubProfileLink && (
        <SpecificSocialMedia>
          <SocialMediaName>github: </SocialMediaName>
          <ClickableUserHandle href={GithubProfileLink}>@{github_handle}</ClickableUserHandle>
        </SpecificSocialMedia>
      )}
      {MediumProfileLink && (
        <SpecificSocialMedia>
          <SocialMediaName>medium: </SocialMediaName>
          <ClickableUserHandle href={MediumProfileLink}>@{medium_handle}</ClickableUserHandle>
        </SpecificSocialMedia>
      )}
    </SocialMediaContainer>
  )
}

const UserProfile = ({name, twitter_handle, github_handle, medium_handle}: UserProfileProps) => {
  return (
    <ProfileWrapper>
      <ProfileIcon></ProfileIcon>
      <ProfileDescription>
        <Name>{name}</Name>
        <UserSocialMedia
          twitter_handle={twitter_handle}
          github_handle={github_handle}
          medium_handle={medium_handle}
        />
        <Expertise></Expertise>
      </ProfileDescription>
    </ProfileWrapper>
  )
}

function About() {
  return (
    <PageWrapper>
      <SectionContainer>
        <SectionTitle text="About" />
        <SectionParagraph>
          Odis is a collective of crypto-native developers, product managers, investors, and
          community experts with past experiences working in both the large scale web2 software
          industry as well as the web3 space. We are a founder-first firm that specializes in
          helping you scale up your protocol to the next level by providing you engineering,
          product, and community resources to help you gain wider mainstream adoption.
        </SectionParagraph>
        <SectionParagraph>
          The amount of equity and/or tokens taken by other accelerators is disproportionately high
          compared to the value they provide, negatively impacting the cap table and impairing
          possible follow-on funding due to skewed tokenomics. After going through the long
          onboarding process, accelerators throw companies into cohorts with a holistic approach,
          which is an inefficient use of time and resources for founders.
        </SectionParagraph>
        <SectionParagraph>
          We offer more founder-friendly terms than traditional accelerators and advisory services
          while still aligning incentives for both parties. The onboarding process is less than two
          weeks and a bespoke advisory program is developed for each client. Our core team has been
          on both sides of the table and has the expertise to steer any Web3 startup in the right
          direction.
        </SectionParagraph>
        <SectionTitle text="Core Team" />
        <UserProfile
          name="Lorem Ipsum"
          twitter_handle="randomtwitter"
          github_handle="randomgithub"
          medium_handle="randommedium"
        />
      </SectionContainer>
    </PageWrapper>
  )
}

export default About
