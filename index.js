class Formatter {
  //add static methods here
  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str){
    return str.replace( /[^0-9a-z' -]/gi, '')
  }

  static titleize(str){
    let exceptionArr = ['the','a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']
    let arr = str.toLowerCase().split(' ')
    let newArr = arr.map((e,idx)=>{
      if(!(exceptionArr.includes(e)) || idx==0){
         return e.charAt(0).toUpperCase()+e.slice(1)}else{
           return e
         }
        })

        return newArr.join(' ')
  }
}

