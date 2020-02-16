class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9- ']+/g,'')
  }
  
  static titleize(string){
    
    let y=[];
    let str = string.split(" ");
    let yasak = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    
   str.filter( (el,ind) =>{ 
     if (yasak.includes(el) ===false){
       
          return y.push(this.capitalize(el))
       
     }
     else {
       return y.push(el)
     }
        
     
   } )
   return this.capitalize(y.join(" "))
   
  }
}