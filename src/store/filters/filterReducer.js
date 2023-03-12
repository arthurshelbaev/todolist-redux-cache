export const filters = (state = "all", action) => {
    switch (action.type) {
        case "all": {
            return state = "all"
        }
        case "active": {
            return state = "active"
        }
        case "completed": {
            return state = "completed"
        }
        default: return state;
    }
}

export const selectAll = (filter) => ({
    type: "all",
    filter
})
export const selectActive = (filter) => ({
    type: "active",
    filter
})
export const selectCompleted = (filter) => ({
    type: "completed",
    filter
})