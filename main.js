// Question 1 : Write a JavaScript conditional statement to sort three numbers. Display an alert box to show
function Question1(a, b, c) {
  let temp;
  if (a < b) {
    temp = a;
    a = b;
    b = temp;
  }
  if (a < c) {
    temp = a;
    a = c;
    c = temp;
  }
  if (b < c) {
    temp = b;
    b = c;
    c = temp;
  }
  console.log(a, b, c);
  alert(a + ", " + b + ", " +c);
}
// Question1(3, -7, 2);


// Question 2 : Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of 
// three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are
// multiples of both three and five print "FizzBuzz".

function Question2() {
    for( let i=1; i<=100 ; i++){
        if(i%3==0 && i%5==0){
            console.log("FizzBuzz");
        }else if(i%3==0){
            console.log("Fizz");
        }else if(i%5==0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }
}
// Question2();

// Question 3 : Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

function Question3() {
    let sum = 0;
    for( let i=1; i<1000 ; i++){
        if(i%3==0 && i%5==0){
            sum += i;
        }
    }
    console.log("Sum of multiples of 3 and 5 under 1000 is : "+ sum);
}
Question3();


// Question 4: Write a JavaScript program where the program takes a random integer between 1 to 10, the
// user is then prompted to input a guess number. If the user input matches with guess
// number, the program will display a message "Good Work" otherwise display a message ‘
// wrong guess, want to try again?’ if confirmed continue up to 3 times, if not stop the code,
// after 3 failed times, display message ‘game over’.

function Question4() {
    let random= Math.floor(Math.random() * 10) ;
    // console.log(random);
    let count=3;
    let userGuess;
    while(count--){
        userGuess = prompt("Enter your guess between 1 to 10");
        if(userGuess == random){
            console.log("Good Work! :)");
            break;
        }
        else if(count==0){
            console.log("Game Over :(");
            break;
        }else{
            let tryAgain = prompt("Wrong guess, want to try again? Enter 'yes' or 'no'");
            if(tryAgain == 'no'){
                console.log("Game Over");
                break;
            }
        }
    }
}
Question4();