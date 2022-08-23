import styled from 'styled-components'

export const BannerIconContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`

type IconContainerProps = {
  color: string
}

export const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background-color: ${(props) => props.theme[props.color]};
  color: ${(props) => props.theme.background};
  padding: 0.5rem;
`
