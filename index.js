class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
      return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }
  static titleize(string) {
   let exceptions=['a','an','but','of','and','for','at','by','from','always','the']
   let splitString = string.split(" ")
   let titleized=[]; 
   for(let i = 0 ; i < splitString.length ; i++) { 
      if(i == 0){
        titleized.push(this.capitalize(splitString[i]))
       } else if (exceptions.includes(splitString[i])){
      titleized.push(splitString[i]);
       } else{
       titleized.push(this.capitalize(splitString[i]));
      }
  } return titleized.join(" ");
  }
}