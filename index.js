class Formatter {
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
  static sanitize(str) {
    return str.replace(/[^0-9a-zA-Z\s'-]/g, '');
  }
  static titleize(str) {
    const arr = str.split(' ');
    const notCapitalizes = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const newArr = arr.map((element, index) => {
      if (!notCapitalizes.includes(element)) {
        return element[0].toUpperCase() + element.slice(1);
      } else {
        if (index === 0) {
          return element[0].toUpperCase() + element.slice(1);
        } else {
          return element;
        }
      }
    });
    return newArr.join(' ');
  }
}