import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { Badge, ListGroupItem, ListGroupItemHeading, Button } from 'reactstrap'
import { SeverityLevels } from '../actions'

const Requirement = ({ onRemove, description, severityLevel }) => (
    <ListGroupItem className="clearfix justify-content-between">
        <ListGroupItemHeading className="float-left">{description} <Badge pill>{SeverityLevels[severityLevel]}</Badge></ListGroupItemHeading>
        <Button className="float-right" color="danger" onClick={onRemove}>X</Button>
    </ListGroupItem>
)

Requirement.propTypes = {
    description: PropTypes.string.isRequired,
    severityLevel: PropTypes.string.isRequired, // TODO: Check if this is a valid severity level defined in actions
    onRemove: PropTypes.func.isRequired
}

export default connect()(Requirement)