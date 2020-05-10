class Formatter {
  static capitalize(string) {
    return string = string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string = string.replace(/[^a-zA-Z-'\s]/g, "");
  }
  static titleize(string) {
    string = string.split(' ');
    let titleizeString = [];
    let regex = /\bthe\b|\ba\b|\ban\b|\bbut\b|\bof\b|\band\b|\bfor\b|\bat\b|\bby\b|\bfrom\b/;
    titleizeString.push(this.capitalize(string[0]));
    string.map((word, index) => {
      if (index === 0) {
        return;
      }
      if (!regex.test(word)) {
        titleizeString.push(this.capitalize(word));
      } else {
        titleizeString.push(word);
      }
    });
    return titleizeString.join(' ');
  }
}
