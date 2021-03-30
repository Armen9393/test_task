import { InputHTMLAttributes } from 'react'

import {
  Wrapper,
  Input,
  Label,
} from './styled'

type Props = Pick<InputHTMLAttributes<HTMLInputElement>, (
  | 'checked'
  | 'id'
  | 'name'
  | 'onChange'
)> & {
  label?: string,
}

export const Checkbox = ({
  checked,
  id,
  label,
  name,
  onChange,
}: Props) => (
  <Wrapper>
    <Input
      onChange={onChange}
      id={id}
      type="checkbox"
      name={name}
      checked={checked}
    />
    <Label htmlFor={id}>{label}</Label>
  </Wrapper>
)
