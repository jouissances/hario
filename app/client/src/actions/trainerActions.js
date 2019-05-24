export function fetchTrainer() {
    return (dispatch) => {
        fetch(`http://localhost:3001/api/trainers`)
        .then(response => response.json())
        .then(data => dispatch(fetchTrainerSuccess(data[0])))
        .catch(error => dispatch(fetchTrainerFailure(error)))
    }
}

export const FETCH_TRAINER_SUCCESS = 'FETCH_TRAINER_SUCCESS';
export const FETCH_TRAINER_FAILURE = 'FETCH_TRAINER_FAILURE';

export const fetchTrainerSuccess = trainer => ({
    type: FETCH_TRAINER_SUCCESS,
    payload: { trainer }
})

export const fetchTrainerFailure = error => ({
    type: FETCH_TRAINER_FAILURE,
    payload: { error }
})