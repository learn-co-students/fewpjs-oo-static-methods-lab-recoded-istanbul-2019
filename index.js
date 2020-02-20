class Formatter {
  //add static methods here
  static capitalize(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
  }

  static sanitize(string) {
      return string.replace(/[^A-Za-z0-9,' ',-]/g, '');
  }

  static titleize(string) {
    let newString = string.split(' ');
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
//        console.log(newString);
  
    let result = newString.map(
      function(e, i) {
        if(i == 0) { return Formatter.capitalize(e) }
        else if(exceptions.includes(e)) { return e }
        return Formatter.capitalize(e);
      } 
    ).join(' '); // end map
    return result;
    }
}