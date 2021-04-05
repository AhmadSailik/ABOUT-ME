'use strict'
let userName=prompt('what\'s your name?')
alert('welcome '+userName)


let questionOne=prompt('Do you think my first name is ahmad')
questionOne = questionOne.toLowerCase();
console.log(questionOne)
switch(questionOne){
    case 'yes': 
    case 'y':
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
  alert('Yes it\'S right');
  break; 
    case 'no':
    case 'n':
  alert('No it\'S false');
    break;
    default:
  alert('type yes,no');
 
}
alert('welcome '+userName+'my name is ahmad and my age is 27 and my job is engineer and my language is arabic and my favorite game is tennis ')