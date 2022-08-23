import { Product } from '../../contexts/CartContext'
import { CartActionTypes } from './actions'
import { produce } from 'immer'

interface CartState {
  products: Product[]
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case CartActionTypes.ADD_NEW_ITEM:
      return produce(state, (draft) => {
        draft.products.push(action.payload.newProduct)
      })
    case CartActionTypes.CHANGE_QUANTITY: {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id,
      )
      return produce(state, (draft) => {
        draft.products[productIndex].quantity = action.payload.quantity
      })
    }
    default:
      return state
  }
}
