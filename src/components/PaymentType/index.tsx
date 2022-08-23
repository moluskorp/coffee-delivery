import { Bank, CreditCard, Money } from 'phosphor-react'
import { HTMLAttributes } from 'react'
import { defaultTheme } from '../../styles/themes/default'
import { PaymentTypeContainer } from './styles'

interface Props extends HTMLAttributes<HTMLDivElement> {
  type: 'credito' | 'debito' | 'dinheiro'
  selected: boolean
}

export function PaymentType({ type, selected, ...rest }: Props) {
  return (
    <PaymentTypeContainer {...rest} selected={selected}>
      {type === 'credito' && (
        <>
          <CreditCard color={defaultTheme.purple} size={16} />
          <span>CARTÃO DE CRÉDITO</span>
        </>
      )}
      {type === 'debito' && (
        <>
          <Bank color={defaultTheme.purple} size={16} />
          <span>CARTÃO DE DÉBITO</span>
        </>
      )}
      {type === 'dinheiro' && (
        <>
          <Money color={defaultTheme.purple} size={16} />
          <span>DINHEIRO</span>
        </>
      )}
    </PaymentTypeContainer>
  )
}
