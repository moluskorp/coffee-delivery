import styled, { css } from 'styled-components'

interface PaymentTypeContainerProps {
  selected: boolean
}

export const PaymentTypeContainer = styled.div<PaymentTypeContainerProps>`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  width: 11.25rem;

  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  border-radius: 6px;
  padding: 1rem;

  font-size: 0.75rem;
  transition: background-color 0.2s;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme['base-hover']};
  }

  ${(props) =>
    props.selected &&
    css`
      background-color: ${(props) => props.theme['purple-light']};
      border: 1px solid #8047f8;
    `}
`
