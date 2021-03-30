import type { ChangeEvent } from 'react'
import { 
  useState, 
  useEffect,
  useMemo,
  useCallback,
 } from 'react'

import type { Rates } from 'platform/requests/getRates'
import { getRates } from 'platform/requests/getRates'

type Props = {
  customValue: string,
  checkboxState: boolean,
}

export const useConverter = ({
  customValue,
  checkboxState,
}: Props) => {
  const [ inputValue, setInputValue ] = useState<number | string>(1)
  const [ rates, setRates ] = useState<Rates>()
  const [ result, setResult ] = useState<{
    buy: string | number, 
    sale: string | number
  }>()

  useEffect(()=> {
    if(checkboxState) {
      setRates({
        buy: +customValue,
        sale: +customValue,
      })
    } else {
      getRates().then((res)=> {
        setRates(res.data[0])
        countRates(res.data[0])
      })
    }
  }, [])

  useEffect(()=> {
    countRates(rates)
  }, [inputValue, rates])

  const countRates = useCallback((rates: Rates) => {
    if(inputValue && rates) {
      setResult({
        buy: (+inputValue * rates.buy).toFixed(3),
        sale: (+inputValue * rates.sale).toFixed(3)
      })
    }
    else {
      setResult({
        buy: rates?.buy,
        sale: rates?.sale
      })
    }
  }, [inputValue])

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if(+event.target.value >= 0){
      setInputValue(event.target.value)
    }
  }

  return { 
    onInputChange,
    inputValue,
    rates,
    result,
  }
}
