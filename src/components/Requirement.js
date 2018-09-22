import PropTypes from 'prop-types'
import React from 'react'
import { Badge, ListGroupItem } from 'reactstrap'
import { SeverityLevels } from '../actions'

const Requirement = ({ description, severityLevel }) => (
    <ListGroupItem className="justify-content-between">{description} <Badge pill>{SeverityLevels[severityLevel]}</Badge></ListGroupItem>
)

Requirement.propTypes = {
    description: PropTypes.string.isRequired,
    severityLevel: PropTypes.string.isRequired // TODO: Check if this is a valid severity level defined in actions
}

export default Requirement