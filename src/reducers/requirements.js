const requirements = (state = [], action) => {
    switch (action.type) {
        case 'ADD_REQUIREMENT':
            return [
                ...state,
                {
                    ...action
                }
            ]
        case 'REMOVE_REQUIREMENT':
            return state.filter(requirement => requirement.id !== action.requirementId)
        default:
            return state
    }
}

export default requirements