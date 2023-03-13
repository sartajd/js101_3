function loadPage(id){
    // 
    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
    .then(res => res.json())
    .then(page => {
        document.querySelector("h1").innerHTML = page.title
        document.querySelector("p").innerHTML = page.body

        history.pushState(page,  id, id)
    })
}

document.addEventListener("DOMContentLoaded", function(){
    // 
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", function(){
            loadPage(this.dataset.page) 
        })
    })
})

window.addEventListener("popstate", function(event){
    const page = event.state
    document.querySelector("h1").innerHTML = page.title
    document.querySelector("p").innerHTML = page.body

})

