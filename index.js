class Formatter {
  //add static methods here
  static capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

  static sanitize(name) {
    return name.replace(/[^\w- ']/g, '');
  }

  static titleize(str){
    let words = str.split(" ");
    for(let i = 0; i<words.length;i++){
      console.log(words[i])
      if(i == 0){
        words[i] = Formatter.capitalize(words[i]);
      }
      if(words[i]== "a"|| words[i]=="an"|| words[i]=="the"|| words[i]=="but"|| words[i]=="of"|| words[i]=="and"|| words[i]=="for"|| words[i]=="at"|| words[i]=="by"|| words[i]=="from"){

      }
      else{
        words[i] = Formatter.capitalize(words[i]);
      }
    }
    words = words.join(" ");
    return words;
  }
}