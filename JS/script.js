const button = document.querySelector("input[type=submit]")
const inputs = document.querySelectorAll("input")
const error = document.querySelectorAll(".error")
var mailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
button.addEventListener("click", (e) => {
    e.preventDefault()
    for (let i = 0; i < inputs.length - 1; i++) {
        const errIcon = inputs[i].nextElementSibling
        const errMsg = errIcon.nextElementSibling
        if (i === 2) {
            if (inputs[i].value.match(mailFormat) && inputs[i].value != "") {
                errIcon.style.visibility = "hidden"
                errMsg.style.visibility = "hidden"
            } else {
                errIcon.style.visibility = "visible"
                errMsg.style.visibility = "visible"
            }
        }
        else { 
            if (inputs[i].value.trim() === "") {
                errIcon.style.visibility = "visible"
                errMsg.style.visibility = "visible"
            }
            else {
                errIcon.style.visibility = "hidden"
                errMsg.style.visibility = "hidden"
            }
        }
    }
})
