import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 40rem 28rem;
  margin-top: 2.5rem;
  grid-gap: 2rem;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  h1 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;
    font-family: 'Baloo 2', cursive;
  }
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};
  margin-top: 1rem;
  border-radius: 6px;

  h2 {
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 400;
  }

  h3 {
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
    font-weight: 400;
  }
`
export const Flex = styled.div`
  display: flex;
  gap: 0.5rem;
`
export const PaymentTypeContainer = styled.div`
  display: flex;
  flex: 1;
  margin-top: 2rem;
  align-items: center;
  justify-content: space-between;
`
export const SubtotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 0.875rem;
    font-weight: 400;
  }

  h2 {
    font-size: 1rem;
    font-weight: 400;
  }
`

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.75rem;

  h3 {
    font-size: 1.25rem;
    font-weight: bold;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: bold;
  }
`
