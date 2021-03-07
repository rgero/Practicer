// Get visible instruments
const getVisibleInstruments = (instruments, { text, sortBy }) => {
    return instruments.filter((instrument)=> {
        const textMatch = typeof text !== "string" || instrument.make.toLowerCase().includes(text.toLowerCase()) || instrument.type.toLowerCase().includes(text.toLowerCase()) || instrument.model.toLowerCase().includes(text.toLowerCase())

        return textMatch;
    }).sort((a,b) => {
            if (sortBy === "ascending"){
                return a.make.toLowerCase() + a.model.toLowerCase() >= b.make.toLowerCase() + b.model.toLowerCase() ? 1: -1;
            } else {
                return a.make.toLowerCase() + a.model.toLowerCase() <= b.make.toLowerCase() + b.model.toLowerCase() ? 1: -1;
            }
    })
}

export {getVisibleInstruments}