/*
const getPosts = (start=0, end=start+9) => {
    let posts = []

    for(let i = start; i < end; i++){
        fetch("https://jsonplaceholder.typicode.com/posts/"+i)
        .then(response => response.json())
        .then(post => {
            console.log(post)
            posts.push(post.title);
        })
    }


    return new Promise((resolve, reject) => {
        if(posts.length > 0){
            resolve(posts)
        }else {
            reject("Cant fetch posts")
        }
    })
}

*/








const getPosts = (start=0, end=start+9) => {
    let data = []
    
    const promise = new Promise((resolve, reject)=> {
        try{
            for(let i = start; i <= end; i++){
                data.push("Post " + i)
            }
            resolve(data);
        }
        catch(e) {
            reject("Error while loading posts")
        }
    })
    
    return promise
}
