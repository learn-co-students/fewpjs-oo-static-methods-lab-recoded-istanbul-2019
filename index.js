class Formatter {
  //add static methods here

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

static sanitize(string) {
    return string.replace (/[^A-Za-z0-9 '-]/gi, '');
}

static titleize(string) {
    let arr = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let newStr = string.split(" ");

    newStr[0] = this.capitalize(newStr[0]);
    
    for(let i = 1; i<newStr.length; i++){
        if(!arr.find(el => el == newStr[i])){
          newStr[i]=this.capitalize(newStr[i]);
        }
    }
    return newStr.join(" ");

}
}