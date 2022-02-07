let num1 =10;
let num2 =50;
let num3 =60;
function Total_number() {
    let addition = num1+ num2+ num3;
    console.log(addition)
}
Total_number()


let a = 1;
let b = 2;
if ( a > b){
  console.log('That is correct as I expected')
} else if (a < b){
  console.log('finally,this one is correct')
}

let c = 20;
let d = 66;
if (c === 20 || d ===55){
console.log('Correct again!')
}

let dd = [11,2,3,4,5,]
for (let i = 0;i < dd.length; i++){
console.log(dd[i]);
}
let number =['one','two', 'three',]
number.forEach((val,i) => {
  console.log(val)
})

if(50<60){
  console.log('True')
}else {
  console.log('false')
}

let color = 'black';
switch(color){
case'green': console.log('This is Green Color');break;
case 'red': console.log('This is red color'); break;
case 'royalBlue': console.log('This is royalBlue'); break;
default: console.log("I can't guess anymore"); 
}

