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
    let empty = [];
    empty.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1));
    
    for(const el of arr){
      for(const e of nonCap){
        if(el != e){
         empty.push(el.charAt(0).toUpperCase() + el.slice(1))
        }
      }
    }
    return empty.join(" ");
  }
}