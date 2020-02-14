// let copmarer = {
//   "a":1,
//   "an":1,
//   "but":1,
//   "of":1,
//   "for":1,
//   "at":1,
//   "by":1,
//   "from":1
// }
class Formatter {
  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str){
    return str.replace(/[^A-Za-z0-9-' ]+/g,"")
  }

  static titleize(str){
    let donCapitalize = ["a","an","but","of","the","and","for","at","by","from"]
    let array = str.split(" ")
    array[0] = this.capitalize(array[0])
    for (let index = 1; index < array.length; index++) {
      if(!donCapitalize.some(e=>e===array[index])){array[index] = this.capitalize(array[index])}
    }
    return array.join(" ")
  }
}
debugger
console.log(Formatter.titleize( "getting giggles" ));
