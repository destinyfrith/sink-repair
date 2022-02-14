const applicationState = {
    requests: [

    ]
}
// the url of the address you need data from
const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.requests = serviceRequests
            }
        )
}

// Define/export a function named getRequests that returns a copy of the requests state

export const getRequests = () => {
    return applicationState.requests.map(request => ({ ...request }))
}
