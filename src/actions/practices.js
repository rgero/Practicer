export const addPractice = (practice) => ({
    type: 'ADD_PRACTICE',
    practice
})

export const removePractice = ( id ) => ({
    type: 'REMOVE_PRACTICE',
    id
})

export const editPractice = ( id, update = {}) => ({
    type: "EDIT_PRACTICE",
    id,
    update
})

// SET_PRACTICE
export const setPractices = (practices) => ({
    type: 'SET_PRACTICES',
    practices
});