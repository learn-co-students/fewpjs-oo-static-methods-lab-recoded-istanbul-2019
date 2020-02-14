class Formatter {
  //add static methods here
  
  static capitalize(str){
    return str.charAt(0).toUpperCase()+str.slice(1)
  }
  
  static sanitize(str){
    return str.replace(/[^a-z0-9,' ',-]+/gi, '')
  }
  
  static titleize(str){
    let strArr= str.split(' ')
    let noC=['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    strArr[0]=Formatter.capitalize(strArr[0])
    
    for(let i=1;i<strArr.length;i++){
      if(!noC.includes(strArr[i])) {strArr[i]=Formatter.capitalize(strArr[i])}
    }
    return strArr.join(' ')
  }
}