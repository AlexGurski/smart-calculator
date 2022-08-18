const betweenLeft = (string) =>{
    let buf = Math.max.apply(null,[string.lastIndexOf('-')==0?-1:string.lastIndexOf('-'),string.lastIndexOf('+'),string.lastIndexOf('/'), string.lastIndexOf('×')]  )
    return string.slice(buf+1)
}
const betweenRight = (string) =>{
    let buf = Math.max.apply(null,[string.indexOf('-')===0?-1:string.indexOf('-'),string.indexOf('+'),string.indexOf('/'), string.indexOf('×')]  )
    
    return buf>0?string.slice(0,buf):string
}
const multiplyOrDivide = (string, ind) =>{    
    let left = betweenLeft(string.slice(0,ind))
    let right = betweenRight(string.slice(ind+1))
   console.log(left)
   console.log(right)
}

export const calculating = (response) =>{
    let string = response[response.length-1]==='×' || response[response.length-1]==='+' || response[response.length-1]==='/' || response[response.length-1]==='-'?response.slice(0,response.length-1):response
    let mulInd = string.indexOf('×')
    let divideInd = string.indexOf('/')
     if (mulInd>0 || divideInd>0){
        if (mulInd>0 && divideInd>0){
            multiplyOrDivide(string, divideInd>0?divideInd<mulInd?divideInd:mulInd:mulInd)
        }
        else if(mulInd>0){
            multiplyOrDivide(string, mulInd)
        }else{
            multiplyOrDivide(string, divideInd)
        }
    }
}

