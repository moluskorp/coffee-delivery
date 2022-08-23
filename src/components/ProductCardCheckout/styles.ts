import styled, { css } from 'styled-components'
import { Minus, Plus } from 'phosphor-react'

export const ProductCardCheckoutContainer = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    font-size: 1rem;
    font-weight: bold;
  }
`

export const ProductDetailsContainer = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  max-width: 4.5rem;
  border-radius: 6px;
  padding: 0.5rem;
  gap: 0.5rem;
  background-color: ${(props) => props.theme['base-button']};

  span {
    font-size: 1rem;
    color: ${(props) => props.theme['base-title']};
  }
`
type MinusIconProps = {
  disabled: boolean
}

export const MinusIcon = styled(Minus)<MinusIconProps>`
  ${(props) =>
    props.disabled
      ? css`
          color: ${(props) => props.theme['base-button']};

          &:hover {
            cursor: not-allowed;
          }
        `
      : css`
          color: ${(props) => props.theme.purple};
          transition: color 0.2s;

          &:hover {
            cursor: pointer;
            color: ${(props) => props.theme['purple-dark']};
          }
        `}
`
export const PlusIcon = styled(Plus)`
  color: ${(props) => props.theme.purple};
  transition: color 0.2s;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const Divider = styled.div`
  width: 23rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid ${(props) => props.theme['base-button']};
`
