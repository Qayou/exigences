import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'
import { SeverityLevels } from '../actions'

const mapStateToProps = state => ({
    requirements: state.requirements
})

// Download the requirements as a plain text file
const downloadRequirements = requirements => {
    const fileLink = document.createElement("a")
    const text = requirements.map(requirement => `* ${requirement.description} / ${SeverityLevels[requirement.severityLevel]}\r\n`)
    const file = new Blob(text, {type: 'text/plain'})
    fileLink.href = URL.createObjectURL(file)
    fileLink.download = "requirements.txt"
    fileLink.click()
}

const RequirementsDownloader = ({ requirements }) => (
    <Button onClick={() => { downloadRequirements(requirements) }}>Download requirements</Button>
)

export default connect(
    mapStateToProps
)(RequirementsDownloader)