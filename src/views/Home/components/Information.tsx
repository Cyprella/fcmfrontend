import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'

const Information = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`

const TotalValueLockedCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue();
  // const tvl = totalValue.toFixed(2);

  return (
    <Information>
      <CardBody>
        <Heading size="lg" mb="24px">
          {TranslateString(999, 'Information')}
        </Heading>
        <>
          <Text color="textSubtle">{TranslateString(999, 'Farming will start at the same time as coin launch')}</Text>
          <Text color="textSubtle">{TranslateString(999, 'Coin louch will begin at block XXX')}</Text>
        </>
      </CardBody>
    </Information>
  )
}

export default Information
