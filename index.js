class Formatter {

  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9\ \'\-]/gi, '');
  }

  static titleize(str) {
    let noChangeArr = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let arr = str.split(' ');
    arr[0] = this.capitalize(arr[0]);

    for (let i = 1; i < arr.length; i++) {
      if (!noChangeArr.find(e => e === arr[i])) {
        arr[i] = this.capitalize(arr[i]);
      }
    }
    return arr.join(' ');
  }
}