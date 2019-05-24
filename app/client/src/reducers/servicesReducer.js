import {
    FETCH_SERVICES_SUCCESS,
    FETCH_SERVICES_FAILURE
} from '../actions/servicesActions';

const initialState = {
    services: [],
    loading: false,
    error: null
}

export default function logsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_SERVICES_SUCCESS:
            return {
                ...state,
                loading: false,
                services: action.payload.services
            }
        case FETCH_SERVICES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                services: ''
            }
        default:
            return state
    }

} 