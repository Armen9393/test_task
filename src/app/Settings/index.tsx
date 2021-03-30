import type { ChangeEvent } from 'react'

import { Checkbox } from 'app/Checkbox'
import { Input } from 'app/Converter/styled'
import { Wrapper } from './styled'

type Props = {
  checkboxState: boolean,
  toggleCheckbox: () => void,
  customValue: string,
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void,
}

export const Settings = ({
  checkboxState,
  toggleCheckbox,
  customValue,
  onInputChange,
}: Props) => {

  return (
    <Wrapper>
      <Checkbox
        id="1"
        checked={checkboxState}
        onChange={toggleCheckbox}
        label="Use custom exchange rate"
      />
      <Input
        type="number" 
        disabled={!checkboxState}
        onChange={onInputChange}
        value={customValue}
      />
    </Wrapper>
  )
}
