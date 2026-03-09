const greed  = (name,age)=>{
  

  if(!name) return "write a name";

  if(name.length > 100) return "name too long";

  if(age < 0 || age > 120) return "age must be between 0 and 120";

  

    return `Hello ${name} you are ${age} years old.`

}

console.log(greed("manoj",21))