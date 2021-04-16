import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import LotteryCard from './components/LotteryCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'
import NestCard from './components/NestCard'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/toad/3.png');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/toad/3.png'), url('/images/toad/3b.png');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
    box-shadow: 0 0 21px 4px rgba(0,0,0,0.45);
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 12;
    }
  }
`

const logoStyle = {
  maxWidth: '50%',
  marginTop: '2.5rem',
}

const spaceTop = {
  marginTop: '2vh',
}

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <NestCard />
      <Hero style={spaceTop}>
        <Heading as="h1" size="xl" mb="24px" color="secondary">
          <img style={logoStyle} src="https://toad.farm/images/backgrounds/toad-logo.png" alt="Toad Farm" />
        </Heading>
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <CakeStats />
          <TotalValueLockedCard />
          <TwitterCard/>
        </Cards>
      </div>
    </Page>
  )
}

export default Home
