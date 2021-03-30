import type { ChangeEvent } from 'react'
import { useState } from 'react'

export const useSettings = () => {

  const [ checkboxState, setCutsomRate ] = useState(false)
  const [ customValue, setCustomValue ] = useState('')

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
