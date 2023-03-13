
const pages = {
    "first": "<h1>First Page</h1>",
    "second": "<h1>Second Page<h1>",
    "third": "<h1>Third Page</h1>",
}
    
    
    


function getPage(pageName){
      
    const promise = new Promise((res, rej) => {
        try {
            res(pages[pageName]); 
        }
        catch(e){
            rej(e)
        }
    })

    return promise
}