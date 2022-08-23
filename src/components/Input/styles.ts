import styled, { css } from 'styled-components'

type TextInputProps = {
  error?: boolean
  optional: boolean
}

export const TextInput = styled.input<TextInputProps>`
  background-color: ${(props) => props.theme['base-input']};
  border-radius: 4px;
  height: 2.625rem;
  border: 0;
  padding: 0.75rem;
  color: ${(props) => props.theme['base-text']};

  ${(props) =>
    props.error &&
    css`
      border: 1px solid red;
    `}

  &:focus {
    box-shadow: none;
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const OptionalLabel = styled.label`
  position: absolute;
  top: 35%;
  right: 0.75rem;

  font-style: italic;
  font-size: 0.75rem;
  color: ${(props) => props.theme['base-label']};
`

export const ErrorMessage = styled.p`
  font-size: 0.75rem;
  color: red;
  margin-top: 0.25rem;
`
