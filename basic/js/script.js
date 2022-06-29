let li1 = document.querySelector('li');
li1.style.color = 'red';
li1.style.textDecoration = 'underline';

/*
Casing
 - camelCaseOfText
 - PascalCaseOfText
 - snake_case_of_text 
 - kabab-case-of-text
*/

//li1.innerText += " li ever";
//li1.remove();

let ul = li1.parentElement;
//console.log(ul);

let li3 = document.createElement('li');
li3.innerText = "Third";
ul.appendChild(li3);
