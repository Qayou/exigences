import React from 'react'
import { connect } from 'react-redux'
import { ListGroup } from 'reactstrap'
import { removeRequirement } from '../actions'
import Requirement from './Requirement'

const mapStateToProps = state => ({
    requirements: state.requirements
})

const mapDispatchToProps = dispatch => ({
    requirementOnRemove: id => () => dispatch(removeRequirement({ requirementId: id }))
})

const RequirementList = ({ requirements, requirementOnRemove }) => {
    if(requirements.length > 0) {
        return (<ListGroup>
            {
                requirements.map(requirement =>
                    <Requirement key={requirement.id} onRemove={requirementOnRemove(requirement.id)} {...requirement} />
                )
            }
        </ListGroup>)
    } else {
        return (<p>No requirements yet...</p>)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RequirementList)
