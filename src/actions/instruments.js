export const addInstrument = (instrument) => ({
    type: 'ADD_INSTRUMENT',
    instrument
})

export const removeInstrument = ( id ) => ({
    type: 'REMOVE_INSTRUMENT',
    id
})

export const editInstrument = ( id, update = {}) => ({
    type: "EDIT_INSTRUMENT",
    id,
    update
})
// SET_INSTRUMENT
export const setInstruments = (instruments) => ({
    type: 'SET_INSTRUMENTS',
    instruments
});