class Formatter {
  //add static methods here
  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  static sanitize(str2){
    return str2.replace( /[A-Za-z0-9 '-]/gi, "");
  }
  static titleize(){
    return 
  }
}