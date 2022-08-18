export const reverseNumber = (num) =>{  
    if (num!==''){
      let ind = Math.max.apply(null,[num.lastIndexOf('+'), num.lastIndexOf('-'), num.lastIndexOf('×'), num.lastIndexOf('/')])
      let buf= ind>0?num.slice(ind+1):ind
      let rez = ind>0?num.slice(0,ind+1):ind 
      if (num[buf]==='-' && ind===0){
        return num.slice(1)
      }
      if(ind===-1){
        return "-"+num
      }
      if(rez[rez.length-1]==="+"){        
        return rez.slice(0,rez.length-1) +'-'+ buf
      }
      if(rez[rez.length-1]==="-"){
        if(rez[rez.length-2]==="/" || rez[rez.length-2]==="×"){
          return rez.slice(0,rez.length-1) + buf
        }
        return rez.slice(0,rez.length-1) +'+'+ buf
      }
      if((rez[rez.length-1]==="/" || rez[rez.length-1]==="×")&&buf.length>0 ){
        return rez +'-'+ buf
      }
      return num
    }
    return ''
  }
  
  export const checkSymbal = (string, symbal) =>{
    if (string[string.length-1]===".") return string+"0"+symbal
    return string[string.length-1]==='+' || string[string.length-1]==='-'|| string[string.length-1]==='/'|| string[string.length-1]==='×'|| string.length===0?string:string+symbal
  }
  
  export const checkDoubleZero = (string) =>{
    if ((string[string.length-1]==0) && (string[string.length-2]==undefined || string[string.length-2]==='+' || string[string.length-2]==='-'|| string[string.length-2]==='/'|| string[string.length-2]==='×')){ 
      return string
    }
    if (string[string.length-1]==undefined){
      return "0"
    }
    if (string[string.length-1]==='+' || string[string.length-1]==='-'|| string[string.length-1]==='/'|| string[string.length-1]==='×'){
      return string+"0"
    }
    return string+"00"
  }
  export const checkZero = (string) =>{
    if ((string[string.length-1]==0) && (string[string.length-2]==undefined || string[string.length-2]==='+' || string[string.length-2]==='-'|| string[string.length-2]==='/'|| string[string.length-2]==='×')){ 
      return string
    }
    return string+"0"
  }
  export const checkDoth = (string) => {
    if (string[string.length-1]==undefined || string[string.length-1]==='+' || string[string.length-1]==='-'|| string[string.length-1]==='/'|| string[string.length-1]==='×'){ 
      return string+"0."
    }
    
  let ind = Math.max.apply(null,[string.lastIndexOf('+'), string.lastIndexOf('-'), string.lastIndexOf('×'), string.lastIndexOf('/')])
  let buf= ind>1?string.slice(ind+1):string
   if (ind===-1 && buf.indexOf('.')===-1){
    return string+'.'
   }
   if (buf.indexOf('.')===-1) {
    return string+'.'
   }
   return string
  }