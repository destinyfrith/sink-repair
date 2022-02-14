import { getRequests } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${
                requests.map(convertRequestToListElement).join("")
            }
        </ul>
    `

    return html
}

// define the function that will be passed to the map() method.
// converts each service request object into HTML representations
const convertRequestToListElement = (request) => {

    let html = ""

    html += `<li>${request.description}</li>`

    return html
}