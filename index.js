class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase(0) + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s "]+/g, '');
  }

  static titleize(string) {
    const splittedString = string.split(' ');
    const regex = /\b(an?t?d?)\b|\b(but)\b|\b(from)\b|\b(for)\b|\b(of)\b|\b(by)\b|\b(the)\b/i;
    splittedString[0] = this.capitalize(splittedString[0]);
    return splittedString.map((word, i)=>{
    if (regex.test(word) && i !== 0){
      return word;
    }else{
      return this.capitalize(word);
    }
    }).join(' ')
   }
       
    };