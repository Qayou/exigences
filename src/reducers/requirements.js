const requirements = (state = [], action) => {
    switch (action.type) {
        case 'ADD_REQUIREMENT':
            return [
                ...state,
                {
                    ...action
                }
            ]
        default:
            return state
    }
}

export default requirements