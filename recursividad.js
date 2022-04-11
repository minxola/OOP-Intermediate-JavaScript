/* function recursive (){
    if( validadción ){
        llamados recursivos
    } else {
        llamados normales, sin recursividad
    }
}
*/

const numbers = [7,2,4,5,2,8,6];

/* let number;
for(let i =  0; i < numbers.length; i++){
    number = numbers[i];
    console.log({i, number});
} */

function recursive (myArray){
    if(myArray.length != 0){
        const firstNum = myArray[0];
        console.log(firstNum);
        myArray.shift();
        recursive(myArray);
    }
}

recursive(numbers);