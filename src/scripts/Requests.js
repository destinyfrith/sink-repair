import { getRequests } from "./dataAccess.js"
import { deleteRequest } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${requests.map(convertRequestToListElement).join("")
        }
        </ul>
    `

    return html
}

// define the function that will be passed to the map() method.
// converts each service request object into HTML representations
const convertRequestToListElement = (request) => {

    let html = ""

    html += `<li>${request.description}
    <button class="request__delete"
    id="request--${request.id}">
    Delete
    </button>
    </li>`

    return html
}

// Abpve, now that you have a function that can send a DELETE request to the API, 
// you can add a button for the user to click and initiate that process.
// Add the button element right next to the text of each request. 

// Create a delete click event listener
// When the user clicks on any of the delete buttons, invoke the deleteRequest() function you just made above
// Make sure you pass the id of the service request to the deleteRequest() function as an argument

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [, requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})