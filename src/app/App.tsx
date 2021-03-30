import { FunctionComponent, memo } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'

import { StyledLink, AppWrapper } from './styled'

import { Converter } from './Converter'
import { Settings } from './Settings'
import { useSettings } from './hooks'

const App: FunctionComponent = () => {

  const {
    checkboxState, 
    toggleCheckbox,
    customValue,
    onInputChange,
  } = useSettings()
  
  return (
    <AppWrapper>
      <Router>
      <StyledLink to='/converter'>
        Converter
      </StyledLink>
      <StyledLink to='/settings'>
        Settings
      </StyledLink>
        <Switch>
          <Route path='/converter'>
            <Converter 
              checkboxState={checkboxState}
              customValue={customValue}
            />
          </Route>
          <Route path='/settings'>
            <Settings 
              checkboxState={checkboxState} 
              toggleCheckbox={toggleCheckbox}
              customValue={customValue}
              onInputChange={onInputChange} 
            />
          </Route>
          <Redirect to='/converter'/>
        </Switch>
      </Router>
    </AppWrapper>
  )
}

export default memo(App)