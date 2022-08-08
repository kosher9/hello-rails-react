import { createStore } from 'redux'

const initialeState = {
    things: []
}

function rootReducer(state, action) {
    console.log(action.type);
    switch (action.type) {
        default:
            return state
    }
}

export default function configureStore() {
    return createStore(rootReducer, initialeState)
}