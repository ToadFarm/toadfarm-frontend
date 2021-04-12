import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceCakeBusd } from '../../../state/hooks'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const logoStyle = {
    maxWidth: '5%',
    marginRight: '12px'
  }

  const txtCenter = {
    display: 'flex',
    alignItems: 'center',
  }

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms();
  const toadPrice = usePriceCakeBusd();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const cakeSupply = getBalanceNumber(circSupply);
  const marketCap = toadPrice.times(circSupply);

  let toadPerBlock = 0;
  if(farms && farms[0] && farms[0].toadPerBlock){
    toadPerBlock = new BigNumber(farms[0].toadPerBlock).div(new BigNumber(10).pow(18)).toNumber();
  }

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading style={txtCenter} size="xl" mb="24px">
          <img src="https://toad.farm/images/toad/toad.png" style={logoStyle} alt="snek" />
          {TranslateString(534, '🐸 Toad Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">🖇️ {TranslateString(536, 'Total TOAD Supply')}</Text>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">📈 {TranslateString(999, 'Market Cap')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
        </Row>
        <Row>
          <Text fontSize="14px">🔥 {TranslateString(538, 'Total TOAD Burned')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} decimals={0} />
        </Row>
        <Row>
          <Text fontSize="14px">🐣 {TranslateString(540, 'New TOAD/block')}</Text>
          <Text bold fontSize="14px">{toadPerBlock}</Text>
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
