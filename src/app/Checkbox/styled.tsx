import styled from 'styled-components/macro'
import unchecked from 'platform/images/checkboxUnchecked.svg';
import checked from 'platform/images/checkboxChecked.svg';

export const Wrapper = styled.div`
  width: fit-content;
  margin-bottom: 30px;
  margin-top: 20px;
`

export const Label = styled.label`
  display: flex;
  color: black;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  cursor: pointer;
  font-family: Georgia;
`

export const Input = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;

  &+${Label} {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }

  &+${Label}::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 10px;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(${unchecked});
    cursor: pointer;
  }

  &:checked+${Label}::before {
    background-image: url(${checked});
  }
`