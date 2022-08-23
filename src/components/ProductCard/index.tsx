import { ShoppingCart } from 'phosphor-react'
import { useCallback, useContext, useMemo, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { Product } from '../../pages/Home'
import { formatPrice } from '../../utils/formatPrice'
import {
  MinusIcon,
  OrderContainer,
  PlusIcon,
  PriceContainer,
  ProductCardContainer,
  QuantityContainer,
  ShoppingCartContainer,
  TypeContainer,
} from './styles'

interface Props {
  product: Product
}

export function ProductCard({ product }: Props) {
  const { addProduct } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)
  const priceFormatted = useMemo(
    () => formatPrice(product.price).replace('R$', ''),
    [product.price],
  )

  const disabled = useMemo(() => quantity <= 1, [quantity])

  const handleAddProduct = useCallback(() => {
    addProduct({ ...product, quantity })
  }, [addProduct, product, quantity])

  const handleAddQuantity = useCallback(() => {
    setQuantity((state) => state + 1)
  }, [])

  const handleRemoveQuantity = useCallback(() => {
    if (!disabled) {
      setQuantity((state) => state - 1)
    }
  }, [disabled])

  return (
    <ProductCardContainer>
      <img src={product.img} alt={product.name} />
      <TypeContainer>
        {product.type.map((type) => (
          <strong key={type}>{type.toUpperCase()}</strong>
        ))}
      </TypeContainer>
      <h1>{product.name}</h1>
      <span>{product.description}</span>
      <footer>
        <PriceContainer>
          <h2>R$</h2>
          <h3>{priceFormatted}</h3>
        </PriceContainer>
        <OrderContainer>
          <QuantityContainer>
            <MinusIcon
              weight="fill"
              onClick={handleRemoveQuantity}
              disabled={disabled}
            />
            <span>{quantity}</span>
            <PlusIcon weight="fill" onClick={handleAddQuantity} />
          </QuantityContainer>
          <ShoppingCartContainer onClick={handleAddProduct}>
            <ShoppingCart weight="fill" />
          </ShoppingCartContainer>
        </OrderContainer>
      </footer>
    </ProductCardContainer>
  )
}
