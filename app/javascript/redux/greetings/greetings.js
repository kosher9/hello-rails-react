const defaultState = ['Love']
const BASE_URL = 'http://127.0.0.1:3000/'
const GET_GREETING_REQUEST = 'GET_THINGS_REQUEST'

export default function greetingReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_GREETING_REQUEST:
            console.log('Reduced')
            return action.payload.message
        default:
            return state
    }
}

export function setGreeting(message) {
    console.log('GREET')
    return {
        type: GET_GREETING_REQUEST,
        payload: message,
    }
}

export const getGreeting = () => async (dispatch) => {
    console.log('Love')
    const message = await fetch(`${BASE_URL}/v1/greeting`).then((response) => response.json())
    console.log(message)
    dispatch(setGreeting(message))
}
