import {
  Divider,
  MinusIcon,
  PlusIcon,
  ProductCardCheckoutContainer,
  ProductDetailsContainer,
  QuantityContainer,
} from './styles'
import { useCallback, useContext, useMemo } from 'react'
import { CartContext, Product } from '../../contexts/CartContext'
import { formatPrice } from '../../utils/formatPrice'

interface Props {
  product: Product
}

export function ProductCardCheckout({ product }: Props) {
  const { changeProductQuantity } = useContext(CartContext)
  const disabled = useMemo(() => product.quantity <= 0, [product.quantity])
  const total = useMemo(
    () => product.price * product.quantity,
    [product.price, product.quantity],
  )
  const totalFormatted = useMemo(() => formatPrice(total), [total])

  const handleAddQuantity = useCallback(() => {
    changeProductQuantity(product.id, product.quantity + 1)
  }, [product.id, product.quantity, changeProductQuantity])

  const handleRemoveQuantity = useCallback(() => {
    if (!disabled) {
      changeProductQuantity(product.id, product.quantity - 1)
    }
  }, [disabled, product.id, product.quantity, changeProductQuantity])

  return (
    <>
      <ProductCardCheckoutContainer>
        <ProductDetailsContainer>
          <img src={product.img} alt="Imagem do Produto" />
          <div>
            <span>{product.name}</span>
            <QuantityContainer>
              <MinusIcon
                weight="fill"
                onClick={handleRemoveQuantity}
                disabled={disabled}
              />
              <span>{product.quantity}</span>
              <PlusIcon weight="fill" onClick={handleAddQuantity} />
            </QuantityContainer>
          </div>
        </ProductDetailsContainer>
        <h3>{totalFormatted}</h3>
      </ProductCardCheckoutContainer>
      <Divider />
    </>
  )
}
