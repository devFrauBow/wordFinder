const input = require('readline-sync')

let a = input.question('a\n')
let b = input.question('b\n')

let finder = (a, b) => {
    for(let i = 0; i < b.length; i++){
        if(b[i] === a[0]){
            let newindex = i
            for(let x = 0; a.length; x++){
                console.log(`${b[newindex]} && ${a[x]}`)
                if(a[x] === b[newindex]){
                    newindex++
                    if(x === a.length - 1){
                        return true
                    }
                    continue
                }
                return false
            }
        }
        continue
    }
}

console.log(finder(a, b))