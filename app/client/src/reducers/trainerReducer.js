import {
    FETCH_TRAINER_SUCCESS,
    FETCH_TRAINER_FAILURE
} from '../actions/trainerActions';

const initialState = {
    trainer: '',
    loading: false,
    error: null
}

export default function trainerReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TRAINER_SUCCESS:
            return {
                ...state,
                loading: false,
                trainer: action.payload.trainer
            }
        case FETCH_TRAINER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                trainer: ''
            }
        default:
            return state
    }

} 