import type { ChangeEvent } from 'react'
import { useState } from 'react'

export const useSettings = () => {

  const [ checkboxState, setCutsomRate ] = useState<boolean>(false)
  const [ customValue, setCustomValue ] = useState<string>('')

  const toggleCheckbox = () => {
    setCutsomRate(!checkboxState)
  }

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if(+event.target.value >= 0){
      setCustomValue(event.target.value)
    }
  }

  return { 
    checkboxState, 
    toggleCheckbox, 
    onInputChange,
    customValue,
  }
}
