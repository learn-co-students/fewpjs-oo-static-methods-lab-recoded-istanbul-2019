class Formatter {
  //add static methods here

  static capitalize(string){
      return string[0].toUpperCase() + string.substr(1, string.length -1);
  }

  static sanitize(string){
     const regexx = /[!@#$%^&*(),.?":{}|<>]/g;
      return string.replace(regexx , "");
  }
  

  static titleize(string){
    const arr = string.split(" ");
    const newArr = [];
    const regex = /\b(a)\b|\b(and)\b|\b(of)\b|\b(at)\b|\b(but)\b|\b(from)\b|\b(the)\b|\b(in)\b|\b(an)\b|\b(for)\b|\b(by)\b/i;
    newArr.push(this.capitalize(arr[0]));
    for(let i= 1 ; i < arr.length ; i++){
      let word = arr[i];
      if(!(regex.test(word))){
      let secondPart =  word[0].toUpperCase() + word.substr(1, word.length -1)
      newArr.push(secondPart);
      }else{
        let thirdPart = word;
        newArr.push(thirdPart)
      }
    }
    return newArr.join(" ");

  }
  

}