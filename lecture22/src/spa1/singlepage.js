function showPage(page){
    // hide all other divs
    document.querySelectorAll("div").forEach(div => {
        div.style.display = "none"
    })
    document.querySelector(`#${page}`).style.display = "block"
}

document.addEventListener("DOMContentLoaded", function(){
    // 
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", function(){
            showPage(this.dataset.page)
        })
    })
})