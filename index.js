class Formatter {
  //add static methods here
  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  static sanitize(str2){
    return str2.replace( /[^A-Za-z0-9 '-]/gi, "");
  }
  static titleize(str){
    let nonCap = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    let arr = str.split(" ");
    return arr.filter(el => capitalize(el).indexOf(!nonCap))
  }
}