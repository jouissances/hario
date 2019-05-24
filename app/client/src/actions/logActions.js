export function fetchResults(newLog) {
    return (dispatch) => {
        fetch(`http://localhost:3001/api/logs/`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newLog)
        })
        .then(response => response.json())
        .then(data => {
            fetch(`http://localhost:3001/api/logs/${data['id']}`)
            .then(response => response.json())
            .then(data => dispatch(fetchResultsSuccess(data['results'])))
            .catch(error => console.log(error))
        })
        .catch(error => dispatch(fetchResultsFailure(error)))
    }
}

export const FETCH_RESULTS_SUCCESS = 'FETCH_RESULTS_SUCCESS';
export const FETCH_RESULTS_FAILURE = 'FETCH_RESULTS_FAILURE';

export const fetchResultsSuccess = results => ({
    type: FETCH_RESULTS_SUCCESS,
    payload: { results }
})

export const fetchResultsFailure = error => ({
    type: FETCH_RESULTS_FAILURE,
    payload: { error }
})