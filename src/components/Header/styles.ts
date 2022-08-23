import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6.5rem;

  nav {
    display: flex;
    gap: 0.75rem;
  }
`

export const CityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 0.5rem;
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  font-size: 0.875rem;
  border-radius: 6px;
`
export const CartContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  transition: background-color 0.2s;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.yellow};
  }
`

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;

  padding: 0.125rem 0.3125rem;
  border-radius: 99999px;
  background-color: ${(props) => props.theme['yellow-dark']};

  font-size: 0.75rem;
  font-weight: bold;
  color: ${(props) => props.theme.white};
`
