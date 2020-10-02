var number, answer;
let i = 0;
number = +prompt(`inter the number for table creation`);
console.log(`TABLE OF ${number}`);
while ( i < 11){
    if(!number){
        alert(`please inter a number`);
        break;
    }else{
        answer = number * i;
        console.log(`${number} * ${i} = ${answer}`);
        i++
    }
}