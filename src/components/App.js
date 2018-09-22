import React, { Component } from 'react'
import RequirementList from './RequirementList'
import RequirementInput from './RequirementInput'
import { Container } from 'reactstrap'
import RequirementsDownloader from './RequirementsDownloader'

class App extends Component {
  render() {
    return (
      <Container className="App">
        <h2>Add a new requirement</h2>
        <RequirementInput />
        <h2>Requirements</h2>
        <RequirementList />
        <hr />
        <RequirementsDownloader />
      </Container>
    )
  }
}

export default App
