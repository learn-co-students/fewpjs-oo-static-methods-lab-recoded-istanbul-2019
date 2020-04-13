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

    // arr[0]=arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
    arr[0] = capitalize(arr[0]);
    
    for(let i = 1; i<arr.length; i++){
        if(!nonCap.find(el => el == arr[i])){
         arr[i]=arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
        }
    }
    return arr.join(" ");
  }
}