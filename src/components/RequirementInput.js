import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { addRequirement, SeverityLevels } from '../actions'
import { Button, Input, Form, FormGroup, Label, Col } from 'reactstrap'

let severityLevel = 'COULD'
let descriptionInput

const handleSelectOnChange = e => {
    severityLevel = e.target.value
}

const handleFormOnSubmit = (dispatch, e) => {
    e.preventDefault()

    dispatch(addRequirement({ description: descriptionInput.value, severityLevel }))

    descriptionInput.value = ''
}

const RequirementInput = ({ dispatch }) => {
    let options = []

    for(let severityLevel in SeverityLevels) {
        options.push({label: severityLevel, value: SeverityLevels[severityLevel]})
    }

    return (
        <Form onSubmit={e => { handleFormOnSubmit(dispatch, e)}} inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="requirementDescription" className="mr-sm-2">Description</Label>
                <input type="string" name="description" id="requirementDescription" ref={ node => descriptionInput = node } />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="severitySelect">Severity</Label>
                <Col className="mr-sm-2">
                    <Input type="select" name="select" id="severitySelect" onChange={handleSelectOnChange}>
                        {options.map((option, index) =>
                            <option key={index} value={option.label}>{option.value}</option>
                        )}
                    </Input>
                </Col>
            </FormGroup>
            <Button>Add</Button>
        </Form>
    )
}

RequirementInput.propTypes = {
    dispatch: PropTypes.func.isRequired
}

export default connect()(RequirementInput);