import { Product } from '../../contexts/CartContext'

export enum CartActionTypes {
  // eslint-disable-next-line
  ADD_NEW_ITEM = 'ADD_NEW_ITEM',
  // eslint-disable-next-line
  CHANGE_QUANTITY = 'CHANGE_QUANTITY',
}

export function addNewProductAction(newProduct: Product) {
  return {
    type: CartActionTypes.ADD_NEW_ITEM,
    payload: {
      newProduct,
    },
  }
}

export function changeProductQuantityAction(id: string, quantity: number) {
  return {
    type: CartActionTypes.CHANGE_QUANTITY,
    payload: {
      id,
      quantity,
    },
  }
}
