import styled, { css } from 'styled-components'
import { Minus, Plus } from 'phosphor-react'

export const ProductCardContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 6px 36px 6px;
  max-width: 14.5rem;
  padding: 0 1.25rem 1.25rem 1.25rem;
  margin-top: 2.5rem;

  h1 {
    margin-top: 1rem;
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
    font-weight: bold;
  }

  span {
    font-size: 0.875rem;
    margin-top: 0.5rem;
    text-align: center;
  }

  img {
    margin-top: -1.5rem;
  }

  strong {
    padding: 0.25rem 0.5rem;
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    border-radius: 100px;
    font-weight: bold;
    font-size: 0.625rem;
    margin-top: 0.75rem;
  }

  footer {
    width: 100%;
    display: flex;
    margin-top: 2.125rem;
  }
`
export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;

  h2 {
    font-size: 0.875rem;
    font-weight: 400;
  }

  h3 {
    font-size: 1.5rem;
    font-family: 'Baloo 2', cursive;
    font-weight: bolder;
  }
`
export const OrderContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-left: auto;
`
export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 6px;
  padding: 0 0.5rem;
  gap: 0.5rem;
  background-color: ${(props) => props.theme['base-button']};

  span {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme['base-title']};
  }
`
export const ShoppingCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;
  color: ${(props) => props.theme['base-card']};
  padding: 0.5rem 0.75rem;
  transition: background-color 0.2s;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.purple};
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

export const TypeContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`
