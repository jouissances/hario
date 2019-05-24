export function fetchServices() {
    return (dispatch) => {
        fetch(`http://localhost:3001/api/services`)
        .then(response => response.json())
        .then(data => dispatch(fetchServicesSuccess(data)))
        .catch(error => dispatch(fetchServicesFailure(error)))
    }
}

export const FETCH_SERVICES_SUCCESS = 'FETCH_SERVICES_SUCCESS';
export const FETCH_SERVICES_FAILURE = 'FETCH_SERVICES_FAILURE';

export const fetchServicesSuccess = services => ({
    type: FETCH_SERVICES_SUCCESS,
    payload: { services }
})

export const fetchServicesFailure = error => ({
    type: FETCH_SERVICES_FAILURE,
    payload: { error }
})