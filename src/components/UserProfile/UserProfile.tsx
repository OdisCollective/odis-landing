import styled from 'styled-components'

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: #1e2021;
  border-radius: 64px;
  padding: 20px;
  margin: 24px 0;
  font-family: 'Noto San JP', sans-serif;
  font-size: 14px;
  border: 2px solid #16c0f5;
  
  ${({theme}) => theme.mediaWidth.minSmall`
    font-size: 16px;  
    padding: 16px 48px;
  `}}
`

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  height: 100%;
`

const ProfileIcon = styled.div<{pfp_src?: string}>`
  background: url(${({pfp_src}) => pfp_src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100px;
  max-height: 100px;
  min-width: 100px;
  max-height: 100px;
  border-radius: 50%;
  border: 3px solid #16c0f5;
  margin: auto 16px auto auto;
`

const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4px;
  margin-bottom: 5px;
  

  ${({theme}) => theme.mediaWidth.minSmall`
    margin-top: 8px;
    margin-bottom: 12px;
  `}}
`

const Name = styled.div`
  font-family: 'Lexend Deca', sans-serif;
  font-weight: 600;
`

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Expertise = styled.div`
  margin-top: auto;
  font-size: 12px;
  padding-top: 16px;  

  ${({theme}) => theme.mediaWidth.minSmall`
    font-size: 14px;
  `}}
`

const SpecificSocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 8px;
`

const SocialMediaName = styled.div``

const ClickableUserHandle = styled.a`
  text-decoration: none;
  color: #1fb2e2;
`

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

  return (
    <SocialMediaContainer>
      {TwitterProfileLink && (
        <SpecificSocialMedia>
          <SocialMediaName>twitter:&nbsp;</SocialMediaName>
          <ClickableUserHandle href={TwitterProfileLink} target="_blank" rel="noopener noreferrer">
            @{twitter_handle}
          </ClickableUserHandle>
        </SpecificSocialMedia>
      )}
      {GithubProfileLink && (
        <SpecificSocialMedia>
          <SocialMediaName>github:&nbsp;</SocialMediaName>
          <ClickableUserHandle href={GithubProfileLink} target="_blank" rel="noopener noreferrer">
            @{github_handle}
          </ClickableUserHandle>
        </SpecificSocialMedia>
      )}
      {MediumProfileLink && (
        <SpecificSocialMedia>
          <SocialMediaName>medium:&nbsp;</SocialMediaName>
          <ClickableUserHandle href={MediumProfileLink} target="_blank" rel="noopener noreferrer">
            @{medium_handle}
          </ClickableUserHandle>
        </SpecificSocialMedia>
      )}
    </SocialMediaContainer>
  )
}

export interface UserProfileProps extends UserSocialMediaProps {
  name: string
  expertise: string
  twitter_handle?: string
  github_handle?: string
  medium_handle?: string
  pfp_src?: string
}

export const UserProfile = ({
  name,
  expertise,
  twitter_handle,
  github_handle,
  medium_handle,
  pfp_src,
}: UserProfileProps) => {
  return (
    <ProfileWrapper>
      <InnerWrapper>
        <ProfileIcon pfp_src={pfp_src} />
        <ProfileDescription>
          <Name>{name}</Name>
          <UserSocialMedia
            twitter_handle={twitter_handle}
            github_handle={github_handle}
            medium_handle={medium_handle}
          />
          <Expertise>Expertise: {expertise} </Expertise>
        </ProfileDescription>
      </InnerWrapper>
    </ProfileWrapper>
  )
}
