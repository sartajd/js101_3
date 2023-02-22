function calculateAverage(x){
    // calcualte average
    let total = 0
    for(let i = 0; i < x.length; i++){
        // short-hand notation
        total += x[i]
    } 

    let y = total / x.length

    return y
}

