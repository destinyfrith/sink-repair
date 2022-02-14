const applicationState = {
    requests: [

    ]
}

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
    return dataAccess.applicationState.map(request => ({ ...request }))
}
