
export const getTicTacObject = (size) => {
    let arr = Array(Number(size)).fill().map((a,b) => b+1)
    let brr = [...arr]

    let obj = {}
    arr.forEach(a => {
        brr.forEach(b => {
            obj[`${a}-${b}`] = null
        })
    })

    return obj
}


export const validateTicTacboard = (boardObj, boardSize) => {
    // console.log(boardObj)
    const result = {
        isWon: false,
        winner: '-'
    }
    // console.log(boardSize);
    // for row verification
    for(let i=1;i<=boardSize;i++){
        let arr = [];
        for(let j=1;j<=boardSize;j++){
            if(boardObj[`${i}-${j}`]){
                arr.push(boardObj[`${i}-${j}`])
            }
        }
        // console.log(arr)
        arr.filter(a=> a!==null)
        let brr = [...new Set(arr)]
        if(arr.length == boardSize && brr.length === 1){
            result.isWon = true
            result.winner = brr[0]
            return result
        }
    }
    // console.log(result)
    // for column verification
    for(let i=1;i<=boardSize;i++){
        let arr = [];
        for(let j=1;j<=boardSize;j++){
            if(boardObj[`${j}-${i}`]){
                arr.push(boardObj[`${j}-${i}`])
            }
        }
        arr.filter(a=> a!==null)
        let brr = [...new Set(arr)]
        if(arr.length == boardSize && brr.length === 1){
            result.isWon = true
            result.winner = brr[0]
            return result
        }
    }

    // validation for backward diagnonal boxes
    let dia1 = [];
    for(let i=1;i<=boardSize;i++){

        if(boardObj[`${i}-${i}`]){
            dia1.push(boardObj[`${i}-${i}`])
        }
        dia1.filter(a=> a!==null)
        let brr = [...new Set(dia1)]
        if(dia1.length == boardSize && brr.length === 1){
            result.isWon = true
            result.winner = brr[0]
            return result
        }
    }

    // validation for forward diagnonal boxes
    let dia2 = [];
    let j = boardSize
    for(let i=1;i<=boardSize;i++){
        
        if(boardObj[`${i}-${j}`]){
            dia2.push(boardObj[`${i}-${j}`])
        }
        dia2.filter(a=> a!==null)
        let brr = [...new Set(dia2)]
        // console.log('arr')
        if(dia2.length == boardSize && brr.length ===1){
            result.isWon = true
            result.winner = brr[0]
            return result
        }
        j--
    }

    // return false if no winning combo is met
    return result
}