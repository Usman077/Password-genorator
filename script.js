// creating characters
const upperset ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerset ="abcdefghijklmnopqrstuvwxyz";
const numberset ="0123456789";
const symbolset ="~!@#$%^&*+-/"
// storing the inputs in variables
const box = document.getElementById("password")
const pass = document.getElementById("pass")
const uppercase = document.getElementById("uppercase")
const lowercase = document.getElementById("lowercase")
const number = document.getElementById("number")
const symbol = document.getElementById("symbol")



//creating formula for rendom password
const formula = (dataSet)=> {
  return dataSet[ Math.floor(Math.random() * dataSet.length)]
};
// creating the fuction  to check the inputs
const generatepass = (password= "")=>{
     if (uppercase.checked){
    password += formula(upperset)
}
     if (lowercase.checked){
    password += formula(lowerset)
}
     if (number.checked){
    password += formula(numberset)
}
     if (symbol.checked){
    password += formula(symbolset)
}
   if(password.length<=pass.value){
    return generatepass(password)

   }


 box.innerHTML= termainte(password,pass.value);   
  
}
 
// creating a function to eliminate the extra values of the password 
function termainte(str,num){
  if (str.length<num){
    let substr = str.substring(0,num);
    return substr;
  }
  else{
    return str
  }
}




document.getElementById("btn").addEventListener("click",
()=>{
    generatepass();
})
console.log(pass.value)