let counter = 0 

function count(){
    counter++
    // update value of h1 on DOM
    document.querySelector("h1").innerHTML = counter
}


document.addEventListener("DOMContentLoaded", function (){
    document.querySelector("button").addEventListener("click", count)
})
