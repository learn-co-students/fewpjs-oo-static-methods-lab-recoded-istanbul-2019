class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(str) {
    let array = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let result = [];
    let splited = str.split(" ")
    for (let n = 0; n < splited.length; n++) {
      if (n == 0) {
        result.push(this.capitalize(splited[n]))
      } else {
        if (array.includes(splited[n])) {
          result.push(splited[n])
        } else {
          result.push(this.capitalize(splited[n]))
        }
      }

    }
    return result.join(" ");
  }
}