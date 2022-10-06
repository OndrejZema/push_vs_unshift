function speedPush(){
    let start = new Date()

    let list = []

    for(let i = 0; i < 50000; i++){
        list.push(i)
    }
    let end = new Date()

    console.log("push: ", end - start, "ms")
}

function speedUnshift(){
    let start = new Date()

    let list = []

    for(let i = 0; i < 50000; i++){
        list.unshift(i)
    }
    let end = new Date()

    console.log("unshift: ", end - start, "ms")
}

speedPush()
speedUnshift()