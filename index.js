class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-'\s]+/g,'');
  }

  static titleize(string){
   const strArr = string.split(' ');
   const regex = /\b(an?t?d?)\b|\b(but)\b|\b(from)\b|\b(for)\b|\b(of)\b|\b(by)\b|\b(the)\b/i;
   strArr[0] = this.capitalize(strArr[0]);
   return strArr.map((word, index)=>{
   if (regex.test(word) && index !== 0){
     return word;
   }else{
     return this.capitalize(word);
   }
   }).join(' ')
  }
  //add static methods here
}