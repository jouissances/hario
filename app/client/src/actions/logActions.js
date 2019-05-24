let results;

export function fetchResults(newLog) {
    return (dispatch) => {
        fetch(`/api/logs/`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newLog)
        })
        .then(response => response.json())
        .then(data => {
            // debugger
            showResults(data['id'])
            dispatch(fetchResultsSuccess(results))
            // debugger
        })
        // debugger
        .catch(error => dispatch(fetchResultsFailure(error)))
    }
}

function showResults(id) {
    // if (id !== undefined) {
        fetch(`/api/logs/${id}`)
        .then(response => response.json())
        .then(data => results = data['results'])
        .catch(error => console.log(error))
        // debugger
    // }
    return results
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