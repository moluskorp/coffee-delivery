import { HTMLAttributes, ReactNode } from 'react'
import { BannerIconContainer, IconContainer } from './styles'

interface Props extends HTMLAttributes<HTMLDivElement> {
  text: string
  children: ReactNode
  color: string
}

export function BannerIcon({ text, children, color, ...rest }: Props) {
  return (
    <BannerIconContainer {...rest}>
      <IconContainer color={color}>{children}</IconContainer>
      {text}
    </BannerIconContainer>
  )
}
