class Formatter {
  //add static methods here
  static capitalize(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
  }

  static sanitize(string) {
      return string.replace(/[^A-Za-z0-9,' ',-]/g, '');
  }

  static titleize(string) {
    let splited = string.split(' ');
    let exceptionList = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];

    splited.map( (x, y) => {
      if (y == 0) return x[0].toUpperCase() + x.slice(1); 
      else if (exceptionList.includes(x)) return x;
      else return x[0].toUpperCase() + x.slice(1);
    }).join(' ');
    return splited;
  }
}

// parseString = parseString.map(function(elt, index) {
//   if (index == 0) return elt[0].toUpperCase() + elt.slice(1);
//   else if (ignoreThese.includes(elt)) return elt;
//   else return elt[0].toUpperCase() + elt.slice(1);
// }).join(' ’)
// return parseString;
// }