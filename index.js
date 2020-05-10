class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9 '-]/g, '');
  }
  static titleize(str) {
    let splitedStr = str.split(' ');
    let newArr = [];
    let regEx = /\b(a)\b|\b(and)\b|\b(of)\b|\b(at)\b|\b(but)\b|\b(from)\b|\b(the)\b|\b(in)\b|\b(an)\b|\b(for)\b|\b(by)\b/i;
    newArr.push(this.capitalize(splitedStr[0]))
    for (let i=1; i < splitedStr.length; i++) {
     if (!regEx.test(splitedStr[i])) {
        newArr.push(this.capitalize(splitedStr[i]));
      }
      else {
        newArr.push(splitedStr[i]);
      }
  
    }
    return newArr.join(' ');
  }
}