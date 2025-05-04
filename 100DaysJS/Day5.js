// Write a JavaScript funcation that calculates the sum of all even numbers from 1 to a specified limit.

// JavaScript function          >> sumEvenNumbers()
// sum of all even numbers from 1 to a specified limit
// 1 to a specified limit >> for loop 1%2==0 >> if confition

function sumEvenNumbers(number){
    let sum=0
    //console.log(number)
    for(let i=1;i<=number;i++){
        //console.log(i) //1 2 3 4 5 6 
        if(i%2==0){
            //console.log(i);
            //sum=sum+i
            sum+=i; //most prefer
        }
}
console.log(`Sum of all the even numbers from 1 to a specified ${number} is`,sum)
}
sumEvenNumbers(3)
sumEvenNumbers(2)
sumEvenNumbers(6)
sumEvenNumbers(45)

