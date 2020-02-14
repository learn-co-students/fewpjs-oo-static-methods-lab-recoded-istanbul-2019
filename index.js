class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string){
    return string.replace(/[^-,'A-Za-z0-9,' ']+/g, '')
  }
  static titleize(string){
    let arr = ['the','a', 'an','and','but','of','for','at','by','from']
    let a = string.split(" " )
    let first = Formatter.capitalize(a[0]) 
    let second = a.slice(1)
    let test = second.map(ele => arr.includes(ele) ? ele : Formatter.capitalize(ele.toLowerCase())).join(' ')
   return first+ " " + test
}
  
}