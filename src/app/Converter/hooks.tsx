import type { ChangeEvent } from 'react'
import { 
  useState, 
  useEffect,
  useCallback,
 } from 'react'

import type { Rates } from 'platform/requests/getRates'
import { getRates } from 'platform/requests/getRates'
import { roundNumbers } from 'platform/helpers'

type Props = {
  customValue: string,
  checkboxState: boolean,
}

type ResultProps = {
  buy: string | number, 
  sale: string | number,
}

export const useConverter = ({
  customValue,
  checkboxState,
}: Props) => {
  const [ inputValue, setInputValue ] = useState<number | string>(1)
  const [ rates, setRates ] = useState<Rates>()
  const [ result, setResult ] = useState<ResultProps>()

  const countRates = useCallback((rates: Rates) => {
    if(inputValue && rates) {
      setResult({
        buy: roundNumbers(+inputValue * rates.buy),
        sale: roundNumbers(+inputValue * rates.sale),
      })
    }
    else if(!inputValue && rates){
      setResult({
        buy: roundNumbers(rates.buy),
        sale: roundNumbers(rates.sale),
      })
    }
  }, [inputValue])

  useEffect(() => {
    if(checkboxState) {
      setRates({
        buy: +customValue,
        sale: +customValue,
      })
    } else {
      getRates().then((res) => {
        setRates(res.data[0])
        countRates(res.data[0])
      })
    }
  }, [
    customValue, 
    countRates, 
    checkboxState,
  ])

  useEffect(() => {
    countRates(rates)
  }, [
    countRates, 
    inputValue, 
    rates,
  ])

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if(+event.target.value >= 0) {
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
