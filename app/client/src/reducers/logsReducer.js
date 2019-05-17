import {
    FETCH_RESULTS_SUCCESS,
    FETCH_RESULTS_FAILURE
} from '../actions/logActions';

const initialState = {
    results: '',
    loading: false,
    error: null
}

export default function logsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_RESULTS_SUCCESS:
            return {
                ...state,
                loading: false,
                results: action.payload.results
            }
        case FETCH_RESULTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                results: ''
            }
        default:
            return state
    }

} 