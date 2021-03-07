export const addCost = (cost) => ({
    type: 'ADD_COST',
    cost
})

export const removeCost = ( id ) => ({
    type: 'REMOVE_COST',
    id
})

export const editCost = ( id, update = {}) => ({
    type: "EDIT_COST",
    id,
    update
})

export const setCosts = (costs) => ({
    type: 'SET_COSTS',
    costs
});