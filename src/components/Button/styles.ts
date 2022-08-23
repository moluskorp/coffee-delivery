import styled from 'styled-components'

export const ButtonStyled = styled.button`
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  border-radius: 6px;
  padding: 0.75rem;
  border: 0;

  font-size: 0.875rem;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
    cursor: pointer;
  }
`
