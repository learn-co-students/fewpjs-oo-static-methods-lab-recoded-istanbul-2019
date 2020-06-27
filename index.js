class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-'\s]/g, "");
    //removes all non-alphanumeric characters except for dashes, single quotes and spaces.
  };

  static titleize(string){
    let exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    let words = string.toLowerCase().split(" ");

    let newArray = words.map((element, index) => {
      if (!(exceptions.includes(element)) || index === 0)  {
        return element.charAt(0).toUpperCase() + element.slice(1);
      } else {
        return element;
      }
    })
    return newArray.join(" ")
  };
};