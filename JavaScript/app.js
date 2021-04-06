'use strict'

let userName=prompt('what\'s your name?')
alert('welcome '+userName)
let score=0;

let questionOne=prompt('Do you think my first name is ahmad')
questionOne = questionOne.toLowerCase();
console.log(questionOne)
switch(questionOne){
    case 'yes': 
    case 'y':
    score++;
  alert('Yes it\'S right');
  break; 
    case 'no':
    case 'n':
  alert('No it\'S false');
    break;
    default:
  alert('type yes,no');
  
}

let questionTwo=prompt('Do you think my age is 27')
questionTwo = questionTwo.toLowerCase();
console.log(questionTwo)
switch(questionTwo){
    case 'yes': 
    case 'y':
    score++;
  alert('Yes it\'S right');
  break; 
    case 'no':
    case 'n':
  alert('No it\'S false');
    break;
    default:
  alert('type yes,no');
 

}

let questionThird=prompt('Do you think my job is engineer')
questionThird = questionThird.toLowerCase();
console.log(questionThird)
switch(questionThird){
    case 'yes': 
    case 'y':
    score++;
  alert('Yes it\'S right');
  break; 
    case 'no':
    case 'n':
  alert('No it\'S false');
    break;
    default:
  alert('type yes,no');
  
}

let questionFourth=prompt('Do you think my language is arabic')
questionFourth = questionFourth.toLowerCase();
console.log(questionFourth)
switch(questionFourth){
    case 'yes': 
    case 'y':
    score++;
  alert('Yes it\'S right');
  break; 
    case 'no':
    case 'n':
  alert('No it\'S false');
    break;
    default:
  alert('type yes,no');
 
}

let questionFifth=prompt('Do you think my favorite game is tennis ')
questionFifth = questionFifth.toLowerCase();
console.log(questionFifth)
switch(questionFifth){
    case 'yes': 
    case 'y':
    score++;
  alert('Yes it\'S right');
  break; 
    case 'no':
    case 'n':
  alert('No it\'S false');
    break;
    default:
  alert('type yes,no');
 
}




// let weight='';
// for(let i=0;i<4;i++){
// weight=prompt('what do you think my weight')
// if(weight==98){
//   alert('it\'s correct')
//   break;
// }else if(98<weight<105){
//   alert('it\'s hight')
// }else if(weight>=105){
//   alert('it\'s too hight')
// }else if(90<weight<98){
//   alert('it\'s low')
// }else if(weight<=90){
//   alert('it\'s too low')
// }else{
//   alert('please type number')
// }
// }
//question six
let weight='';
for(let i=0;i<4;i++){
  weight=prompt('what do you think my weight?')
  console.log(weight);
  weight=parseInt(weight)
if(weight===98){
  alert('it\'s correct')
  score++;
  break;
}else if(weight>98){
  alert('it\'s too hight')
}else if(weight<98){
  alert('it\'s too low')
}
}
if(weight!==98){
  alert('the correct weight is 98')
}

//question seven
let dash=''
var favDash=['shawarma','burger','mansaf']
for(let i=0;i<6;i++){
 dash=prompt('what is my favorite dash?')
 console.log(dash);
 dash=dash.toLowerCase()
  if(dash===favDash[0]||dash===favDash[1]||dash===favDash[2]){
    alert('it\'s correct')
    score++;
    break;
  }else{
    alert('please try again')
  }
}if(dash!==favDash[0]&& dash!==favDash[1]&& dash!==favDash[2]){
  alert('my favorite dash is shawarma or burger or mansaf')
}
alert('Thanks for playing your socre is ' +  score)
alert('welcome '+userName+' my name is ahmad and my age is 27, my job is engineer, my language is arabic, my favorite game is tennis, my favorite dash is shawarma or burger or mansaf and my weight is 98  ')
