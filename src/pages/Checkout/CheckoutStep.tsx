import { ButtonStyled } from '../../components/Button/styles'
import { Input } from '../../components/Input'
import { PaymentType } from '../../components/PaymentType'
import { ProductCardCheckout } from '../../components/ProductCardCheckout'
import { defaultTheme } from '../../styles/themes/default'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useCallback, useContext, useMemo, useState } from 'react'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

import { CartContext } from '../../contexts/CartContext'

import { formatPrice } from '../../utils/formatPrice'

import {
  Container,
  Box,
  Flex,
  PaymentTypeContainer,
  SubtotalContainer,
  TotalContainer,
  CheckoutContainer,
} from './styles'
import { CheckoutData } from '.'

const newOrderFormValidationSchema = zod.object({
  cep: zod.string().min(8).max(8),
  street: zod.string().min(2),
  number: zod.string().min(1),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1),
  city: zod.string().min(1),
  state: zod.string().min(2).max(2),
})

type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

interface Props {
  onCheckoutFinished: (data: CheckoutData) => void
}

export function CheckoutStep({ onCheckoutFinished }: Props) {
  const { products, total } = useContext(CartContext)
  const [paymentType, setPaymentType] = useState<
    'credito' | 'debito' | 'dinheiro'
  >('credito')

  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
    },
  })

  const { handleSubmit, formState } = newOrderForm

  const { errors } = formState

  const handleCreateNewOrder = useCallback(
    (data: NewOrderFormData) => {
      if (!paymentType) {
        alert('Selecione uma forma de pagamento')
      }
      onCheckoutFinished({ ...data, payment: paymentType })
      console.log('data', data)
    },
    [onCheckoutFinished, paymentType],
  )

  const totalFormatted = useMemo(() => formatPrice(total), [total])

  const totalOrder = useMemo(() => formatPrice(total + 3), [total])
  return (
    <>
      <form onSubmit={handleSubmit(handleCreateNewOrder)}>
        <FormProvider {...newOrderForm}>
          <CheckoutContainer>
            <Container>
              <h1>Complete seu pedido</h1>
              <Box>
                <Flex>
                  <MapPinLine color={defaultTheme['yellow-dark']} size={22} />
                  <div>
                    <h2>Endereço de Entrega</h2>
                    <h3>Informe o endereço onde deseja receber seu pedido</h3>
                  </div>
                </Flex>
                <Flex style={{ marginTop: '2rem' }}>
                  <Input
                    label="CEP"
                    name="cep"
                    placeholder="CEP"
                    error={errors.cep}
                  />
                </Flex>

                <Flex style={{ marginTop: '1rem', flex: '1' }}>
                  <Input
                    label="Rua"
                    placeholder="Rua"
                    name="street"
                    style={{ flex: '1' }}
                    error={errors.street}
                  />
                </Flex>
                <Flex style={{ marginTop: '1rem', flex: '1' }}>
                  <Input
                    label="Número"
                    name="number"
                    placeholder="Número"
                    error={errors.number}
                  />
                  <Input
                    label="Complemento"
                    placeholder="Complemento"
                    required={false}
                    name="complement"
                    style={{ flex: 1 }}
                    error={errors.complement}
                  />
                </Flex>
                <Flex style={{ marginTop: '1rem', flex: '1' }}>
                  <Input
                    label="Bairro"
                    placeholder="Bairro"
                    name="neighborhood"
                    error={errors.neighborhood}
                  />
                  <Input
                    label="Cidade"
                    placeholder="Cidade"
                    name="city"
                    style={{ flex: 1 }}
                    error={errors.city}
                  />
                  <Input
                    label="UF"
                    placeholder="UF"
                    name="state"
                    style={{ width: '3.75rem' }}
                    error={errors.state}
                  />
                </Flex>
              </Box>
              <Box style={{ marginTop: '0.75rem' }}>
                <Flex>
                  <CurrencyDollar color={defaultTheme.purple} size={22} />
                  <div>
                    <h2>Pagamento</h2>
                    <h3>
                      O pagamento é feito na entrega. Escolha a forma que deseja
                      pagar
                    </h3>
                  </div>
                </Flex>
                <PaymentTypeContainer>
                  <PaymentType
                    type="credito"
                    selected={paymentType === 'credito'}
                    onClick={() => {
                      setPaymentType('credito')
                    }}
                  />
                  <PaymentType
                    type="debito"
                    selected={paymentType === 'debito'}
                    onClick={() => {
                      setPaymentType('debito')
                    }}
                  />
                  <PaymentType
                    type="dinheiro"
                    selected={paymentType === 'dinheiro'}
                    onClick={() => {
                      setPaymentType('dinheiro')
                    }}
                  />
                </PaymentTypeContainer>
              </Box>
            </Container>
            <Container>
              <h1>Cafés selecionados</h1>
              <Box>
                {products.map((product) => (
                  <ProductCardCheckout key={product.id} product={product} />
                ))}
                <SubtotalContainer>
                  <h3>Total de itens</h3>
                  <h2>{totalFormatted}</h2>
                </SubtotalContainer>
                <SubtotalContainer style={{ marginTop: '0.75rem' }}>
                  <h3>Entrega</h3>
                  <h2>{'R$ 3,00'}</h2>
                </SubtotalContainer>
                <TotalContainer>
                  <h3>Total</h3>
                  <h2>{totalOrder}</h2>
                </TotalContainer>
                <ButtonStyled style={{ marginTop: '1.5rem' }} type="submit">
                  CONFIRMAR PEDIDO
                </ButtonStyled>
              </Box>
            </Container>
          </CheckoutContainer>
        </FormProvider>
      </form>
    </>
  )
}
