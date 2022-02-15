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

// declare mainContainer again so you can use it below
const mainContainer = document.querySelector("#container")

// The POST method on any HTTP request means "Hey API!! I want you to create something new!"
export const sendRequest = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }


    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(
            () => {
                // updates fetch call to dispatch the custom event after the POST operation has been completed
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            })
}

// initiate the fetch request for DELETE - must have the primary key sent to it as an argument
export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}