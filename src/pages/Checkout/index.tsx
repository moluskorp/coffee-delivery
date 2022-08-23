import { useCallback, useState } from 'react'
import styled from 'styled-components'

import { CheckoutFinished } from './CheckoutFinished'
import { CheckoutStep } from './CheckoutStep'
import { CheckoutContainer } from './styles'

export type CheckoutData = {
  cep: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  state: string
  payment: 'credito' | 'debito' | 'dinheiro' | null
}

const Title = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.theme['yellow-dark']};
  font-weight: bolder;
`

const SubTitle = styled.p`
  font-size: 1.25rem;
  margin-top: 0.25rem;
`

export function Checkout() {
  const [checkoutData, setCheckoutData] = useState<CheckoutData | null>(null)

  const handleCheckoutFinish = useCallback((data: CheckoutData) => {
    setCheckoutData(data)
  }, [])

  return (
    <>
      {checkoutData ? (
        <>
          <Title style={{ marginTop: '5rem' }}>Uhu! Pedido confirmado</Title>
          <SubTitle>
            Agora é só aguardar que logo o café chegará até você
          </SubTitle>
          <CheckoutContainer style={{ marginTop: '2.5rem' }}>
            <CheckoutFinished checkoutData={checkoutData} />
          </CheckoutContainer>
        </>
      ) : (
        <CheckoutContainer>
          <CheckoutStep onCheckoutFinished={handleCheckoutFinish} />
        </CheckoutContainer>
      )}
    </>
  )
}
