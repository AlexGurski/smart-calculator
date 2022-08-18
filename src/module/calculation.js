const betweenLeft = (string) =>{
    let buf = Math.max.apply(null,[string.lastIndexOf('-')==0?-1:string.lastIndexOf('-'),string.lastIndexOf('+'),string.lastIndexOf('/'), string.lastIndexOf('×')]  )
    return string.slice(buf+1)
}
const betweenRight = (string) =>{
    let buf = Math.min.apply(null,[string.indexOf('-'),string.indexOf('+'),string.indexOf('/'), string.indexOf('×')].map(el=>el<0?900:el))
  
    
    return buf>0?string.slice(0,buf):string
}
const multiplyOrDivide = (string, ind) =>{    
    let left = betweenLeft(string.slice(0,ind))
    let right = betweenRight(string.slice(ind+1))
    if (string[ind]==='/'){
        return string.replace(left+'/'+right, (left/right).toFixed(3))
    } else{
        return string.replace(left+'×'+right, (left*right).toFixed(3))
    }
}

const multiplyAndDivideAll = (string)=>{
    while (string.indexOf('×')!==-1 || string.indexOf('/')!==-1){        
        let mulInd = string.indexOf('×')
        let divideInd = string.indexOf('/')
         if (mulInd>0 || divideInd>0){
            if (mulInd>0 && divideInd>0){
                string = multiplyOrDivide(string, divideInd<mulInd?divideInd:mulInd)
            }
            else if(mulInd>0){
                string = multiplyOrDivide(string, mulInd)
            }else{
                string = multiplyOrDivide(string, divideInd)
            }
        }
    }
    return(string)
}
export const calculating = (response) =>{
    let string = response[response.length-1]==='×' || response[response.length-1]==='+' || response[response.length-1]==='/' || response[response.length-1]==='-'?response.slice(0,response.length-1):response
    string = multiplyAndDivideAll(string)
    console.log(string)
}

