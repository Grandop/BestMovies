import React from 'react'
import * as Progress from 'react-native-progress'
import * as S from './styles'
import { Typography } from '@/components/Typography'
import { useTheme } from 'styled-components/native'

interface PopularityBarProps {
  popularity: number
}

export const PopularityBar = ({ popularity }: PopularityBarProps) => {
  const theme = useTheme()
  const normalized = Math.min(popularity / 1000, 1)

  return (
    <S.Container>
      <Typography color="white" fontSize={theme.fontSizes.sm} fontWeight="bold">
        Popularidade
      </Typography>

      <Progress.Bar
        progress={normalized}
        width={null}
        height={12}
        borderRadius={8}
        color={theme.colors.primary_500}
        unfilledColor={theme.colors.primary_200}
        borderWidth={0}
        style={{ marginTop: 8 }}
      />
    </S.Container>
  )
}
