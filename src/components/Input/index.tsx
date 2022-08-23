import { InputHTMLAttributes, useMemo } from 'react'
import { FieldError, useFormContext } from 'react-hook-form'
import { ErrorMessage, OptionalLabel, TextInput } from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  error?: FieldError | undefined
}

export function Input({ label, error, name, required = true, ...rest }: Props) {
  const { register, watch } = useFormContext()
  const content = watch(name)
  const showOptional = useMemo(() => {
    console.log(name, !required, !content)
    if (!required && !content) {
      return true
    }
    return false
  }, [content, required, name])
  console.log(name, showOptional)
  return (
    <div
      style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
    >
      <TextInput
        placeholder={label}
        error={!!error}
        optional={!required}
        {...rest}
        {...register(name)}
      />
      {showOptional && <OptionalLabel>Opcional</OptionalLabel>}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </div>
  )
}
