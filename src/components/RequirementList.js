import React from 'react'
import { connect } from 'react-redux'
import { ListGroup } from 'reactstrap'
import Requirement from './Requirement'

const mapStateToProps = state => ({
    requirements: state.requirements
})

const RequirementList = ({ requirements }) => {
    if(requirements.length > 0) {
        return (<ListGroup>
            {
                requirements.map(requirement =>
                    <Requirement key={requirement.id} {...requirement} />
                )
            }
        </ListGroup>)
    } else {
        return (<p>No requirements yet...</p>)
    }
}

export default connect(
    mapStateToProps
)(RequirementList)
