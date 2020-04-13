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
    
    for(let i = 1; i<arr.length; i++){
        if(!nonCap.find(el => el == arr[i])){
         empty.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
        }
    }
    return empty.join(" ");
  }
}