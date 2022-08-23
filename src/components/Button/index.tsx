import { ReactNode } from 'react'
import { ButtonStyled } from './styles'

interface Props {
  children: ReactNode
}

export function Button({ children }: Props) {
  return <ButtonStyled>{children}</ButtonStyled>
}
