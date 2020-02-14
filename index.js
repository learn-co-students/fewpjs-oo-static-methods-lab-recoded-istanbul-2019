class Formatter {
  //add static methods here

  static capitalize(string){
    return string[0].toUpperCase()+string.slice(1);
  }

  static sanitize(string){
  return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string){
    let exp = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let result = [];
    let array = string.split(' ');
    for (let index = 0; index < array.length; index++) {
     if(index === 0){
       result.push(this.capitalize(array[index]))
     } else {
      if(exp.includes(array[index])){
        result.push(array[index])
      } else {
        result.push(this.capitalize(array[index]))
      }

     }
       
      
      
    }
    return result.join(' ');
  }
}