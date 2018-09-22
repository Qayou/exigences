let nextRequirementId = 0

export const SeverityLevels = {
    'COULD': 'could',
    'MUST': 'must',
    'NICE': 'nice',
    'SHOULD': 'should',
    'WONT': 'won\'t'
}

export const addRequirement = ({ description, severityLevel }) => ({
    type: 'ADD_REQUIREMENT',
    id: nextRequirementId++,
    description: description,
    severityLevel: severityLevel
})

export const removeRequirement = ({ requirementId }) => ({
    type: 'REMOVE_REQUIREMENT',
    requirementId
})