const requirements = (state = [], action) => {
    switch (action.type) {
        case 'ADD_REQUIREMENT':
            console.log('ADD_REQUIREMENT', action)
            return [
                ...state,
                {
                    ...action
                }
            ]
        default:
            return state;
    }
};

export default requirements;