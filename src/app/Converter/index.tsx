import { useConverter } from './hooks'
import { 
  Wrapper, 
  Output, 
  Input,
  Text,
  Currency,
} from './styled'

type Props = {
  customValue: string,
  checkboxState: boolean,
}

export const Converter = ({
  customValue,
  checkboxState,
}: Props) => {
  
  const { 
    inputValue, 
    onInputChange,
    result,
  } = useConverter({
    customValue,
    checkboxState,
  })

 return (
    <Wrapper>
     <Currency> UAH - US Dollar</Currency>
      <Input 
        type="number"
        onChange={onInputChange}
        value={inputValue}
      />
      <Output>
       <Text>
        Buy: {result?.buy}
       </Text>
       <Text>
        Sale: {result?.sale}
       </Text>
      </Output>
    </Wrapper>
  )
}
