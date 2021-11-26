import { initialState } from "../index";

export default function likesReducer(
    state = initialState.likes,
    action
) {
    const {type, payload} = action
    console.log("Inside Likes REDUCER likes")
    console.log(state.likes, 'check state.likes')
    console.log(state, 'check state')
    switch (type) {
        case "ADD_TO_LIKES":
            //console.log(payload,"Added likes")
            return {
                ...state,
                [state.likes.elements]: [...state.likes.elements, payload]
            };
            case "REMOVE_FROM_LIKES":
                return {
                    ...state,
                    elements: state.elements.filter((tracklist) => tracklist !== payload)
                };
                default:
                    return state
}
}