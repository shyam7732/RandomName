let array = [];
let input = document.querySelector("input");
let add = document.querySelector(".add");
let print = document.querySelector(".print");
let output = document.querySelector("p");
let already = [];

add.onclick = () => {
    array.push(input.value);
    console.log(array);
    input.value = ""; 
    input.focus();
}

 print.onclick = () => {
    let i = 0 ;
    let x  = setInterval( () => {
        if(i === array.length - 1){
            output.innerHTML = output.innerHTML + array[getRandomIndex()];
            i++;
            clearInterval(x);
        }else 
            output.innerHTML = output.innerHTML + array[getRandomIndex()] + ", ";
            i++;    
        },1000)
 }


 function getRandomIndex(){
   let name = Math.floor(Math.random()*array.length);
   if (already.includes(name)){
    return getRandomIndex();
   }
   else{
    already.push(name);
    return name;
   }
 }
