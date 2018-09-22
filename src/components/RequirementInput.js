import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap'
import { addRequirement, SeverityLevels } from '../actions'

const mapStateToProps = state => ({
    requirementInputs: state.requirementInputs
})

const mapDispatchToProps = dispatch => ({
    dispatchAddRequirement: ({ description, severityLevel }) => dispatch(addRequirement({ description, severityLevel }))
})

class RequirementInput extends Component {
    constructor(props) {
        super(props)
        this.dispatchAddRequirement = props.dispatchAddRequirement
        this.state = {
            description: '',
            severityLevel: 'COULD'
        }
    }

    handleSelectOnChange = e => {
        this.setState({
            severityLevel: e.target.value
        })
    }

    handleInputOnChange = e => {
        this.setState({
            description: e.target.value
        })
    }

    handleFormOnSubmit = e => {
        e.preventDefault()

        if (!this.state.description.trim())
            return

        this.dispatchAddRequirement({ description: this.state.description, severityLevel: this.state.severityLevel })

        this.setState({
            description: ''
        })
    }

    renderSeverityLevelOptions() {
        let options = []

        let i = 0
        for(let severityLevel in SeverityLevels) {
            options.push(<option key={i} value={severityLevel}>{SeverityLevels[severityLevel]}</option>)

            i++
        }

        return options
    }

    render() {
        return (
            <Form className="clearfix" onSubmit={e => this.handleFormOnSubmit(e)}>
                <FormGroup row>
                    <Label for="requirementDescription" sm={2}>Description</Label>
                    <Col sm={10}>
                        <Input type="string" name="description" id="requirementDescription" onChange={this.handleInputOnChange} value={this.state.description} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="severitySelect" sm={2}>Severity</Label>
                    <Col sm={3}>
                        <Input type="select" name="select" id="severitySelect" onChange={this.handleSelectOnChange}>
                            {this.renderSeverityLevelOptions()}
                        </Input>
                    </Col>
                </FormGroup>
                <Button className="float-right" type="submit" color="success">Add</Button>
            </Form>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RequirementInput)