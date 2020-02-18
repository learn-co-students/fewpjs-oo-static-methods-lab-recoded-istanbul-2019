class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str){
    return str.replace(/[^A-Za-z0-9-' ]+/g, '');                   
  }

  static titleize(str){
    let except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let newArr = [];
    console.log(str)
    let splited = str.split(" ");
      console.log(splited)
    for (let i = 0; i < splited.length; i++) {
      // if (except.includes(splited[i]) && i > 0) {
      //   newArr.push(splited[i])
         
      // }else{
      //   newArr.push(Formatter.capitalize(splited[i]))
      // }
    if (!except.includes(splited[i])||i===0) {
      newArr.push(Formatter.capitalize(splited[i]))
    } else {
      newArr.push(splited[i])
    }
    }
    return newArr.join(' ');
  }
}