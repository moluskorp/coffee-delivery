import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import styled from 'styled-components'
import { CheckoutData } from '.'
import illustrationImg from '../../assets/illustration.svg'

interface Props {
  checkoutData: CheckoutData
}

const DeliveryInfoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-top: 2.5rem;

  border: double 2px transparent;
  border-radius: 6px 36px;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, #dbac2c, #8047f8);
  background-origin: border-box;
  background-clip: content-box, border-box;
`

const DeliveryInfoInside = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;
`
type IconContainerProps = {
  color: 'purple' | 'yellow' | 'yellow-dark'
}

const IconContainer = styled.div<IconContainerProps>`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme[props.color]};
  color: ${(props) => props.theme.background};
  border-radius: 999px;
`

const LineDeliveryInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export function CheckoutFinished({ checkoutData }: Props) {
  return (
    <>
      <DeliveryInfoContainer>
        <DeliveryInfoInside>
          <LineDeliveryInfoContainer>
            <IconContainer color="purple">
              <MapPin weight="fill" size={16} />
            </IconContainer>
            <div>
              <p>
                Entrega em{' '}
                <strong>
                  {checkoutData.street}, {checkoutData.number}
                </strong>
              </p>
              <p>
                {checkoutData.neighborhood} - {checkoutData.city},{' '}
                {checkoutData.state}
              </p>
            </div>
          </LineDeliveryInfoContainer>
          <LineDeliveryInfoContainer>
            <IconContainer color="yellow">
              <Timer weight="fill" size={16} />
            </IconContainer>
            <div>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </div>
          </LineDeliveryInfoContainer>
          <LineDeliveryInfoContainer>
            <IconContainer color="yellow-dark">
              <CurrencyDollar weight="fill" size={16} />
            </IconContainer>
            <div>
              <p>Pagamento na entrega</p>
              <p>
                <strong>{checkoutData.payment}</strong>
              </p>
            </div>
          </LineDeliveryInfoContainer>
        </DeliveryInfoInside>
      </DeliveryInfoContainer>
      <img src={illustrationImg} alt="" />
    </>
  )
}
