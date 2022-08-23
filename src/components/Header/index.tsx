import logoCoffee from '../../assets/logo.svg'
import {
  CartContainer,
  CityContainer,
  Counter,
  HeaderContainer,
} from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext, useMemo } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const { products } = useContext(CartContext)
  const counter = useMemo(() => products.length, [products])
  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <img src={logoCoffee} alt="Logo da aplicação" />
      <nav>
        <CityContainer>
          <MapPin weight="fill" />
          Porto Alegre, RS
        </CityContainer>
        <CartContainer
          onClick={() => {
            navigate('/checkout')
          }}
        >
          <Counter>{counter}</Counter>
          <ShoppingCart weight="fill" />
        </CartContainer>
      </nav>
    </HeaderContainer>
  )
}
