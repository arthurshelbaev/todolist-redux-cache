export const message = (state = true, action) => {
    switch (action.type) {
        case "handleMessage":
            return state = false
        default:
            return state;
    }
}

export const handleMessage = () => ({
  type: "handleMessage"
});