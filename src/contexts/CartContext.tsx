import { createContext, ReactNode, useEffect, useMemo, useReducer } from 'react'
import {
  addNewProductAction,
  changeProductQuantityAction,
} from '../reducers/cart/actions'
import { cartReducer } from '../reducers/cart/reducer'

export type Product = {
  id: string
  name: string
  price: number
  quantity: number
  type: string[]
  description: string
  img: string
}

interface CartContextType {
  products: Product[]
  total: number
  totalItens: number
  addProduct: (product: Product) => void
  changeProductQuantity: (id: string, quantity: number) => void
}

const STORAGE_NAME = '@coffee-delivery:cart-state-1.0.0'

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [productsState, dispatch] = useReducer(
    cartReducer,
    {
      products: [],
    },
    (state) => {
      const storedStateAsJSON = localStorage
        .getItem(STORAGE_NAME)
        ?.replaceAll('undefined', '')

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return state
    },
  )

  const { products } = productsState

  console.log('context', products)

  const total = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + product.price * product.quantity
    }, 0)
  }, [products])

  useEffect(() => {
    const stateJSON = JSON.stringify(productsState)

    localStorage.setItem(STORAGE_NAME, stateJSON)
  }, [productsState])

  function addProduct(product: Product) {
    console.log(productsState)
    dispatch(addNewProductAction(product))
  }

  function changeProductQuantity(id: string, quantity: number) {
    dispatch(changeProductQuantityAction(id, quantity))
  }

  return (
    <CartContext.Provider
      value={{
        products,
        total,
        totalItens: products.length,
        addProduct,
        changeProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
