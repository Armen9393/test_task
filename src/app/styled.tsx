import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
  display: inline-block;
  background: none;
  text-decoration:none;
  margin-right: 50px;
  margin-bottom: 30px;
  color: black;
  font-size: 25px;
  font-weight: 600;
  font-family: Georgia;
  :focus-within,
  :hover {
    outline: none;
  }
`

export const AppWrapper = styled.div`
  width: fit-content;
  margin: auto;
  border: black solid 5px;
  padding: 10px;
  padding-bottom: 50px;
  width: 400px;
  height: 250px;
  margin-top: 50px;
`