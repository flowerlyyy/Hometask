function getNumberFromUser(message){
    let userValue;
    let flag=false;
     
    do{
        if(flag){
            alert('You have to enter number');
        }
        userValue=+prompt(message);
        flag=true;
    } while(isNaN(userValue)){
    return userValue;}
    }

// TASK 1
// User gives 2 numbers (A and B). Print to the console the result of dividing A by B and the remainder of the division.
const x= getNumberFromUser('Enter the number X');
const y= getNumberFromUser('Enter the number Y');
console.log(x);
console.log(y);
calculateFormulas(x,y);
 function calculateFormulas(x1,y1){
const result= x1 / y1;
const result1= x1 % y1;
console.log(result);
console.log(result1);
}

// TASK 2
// The user enters 2 values (A and B). Swap the contents of variables A and B (that means the value of variable B 
// must be assigned to variable A, and vice versa).
// let p=getNumberFromUser('Enter the number P');
// let k=getNumberFromUser('Enter the number K');
// console.log(p);
// console.log(k);
// swapElements(p,k);
// function swapElements(p1,k1){
// let t=p1;
// p1=k1;
// k1=t;
// console.log(`After swapping a is ${p1}`);
// console.log(`After sapping b is ${k1}`);
// }


// // TASK 3
// The user enters 3 non-zero numbers (A, B and C). Print to the console the solution (the value of X)
//  of the standard linear equation, where A*X+B=C.
// const a1=getNumberFromUser("Enter the first number A1");
// const b1=getNumberFromUser("Enter the second number B1");
// const c1=getNumberFromUser("Enter the third number C1");
// console.log(a1);
// console.log(b1);
// console.log(c1);
// calculateLinearEQUATION(a1,b1,c1);
// function calculateLinearEQUATION(a,b,c){
// const x3=(c-b)/a;
// console.log(x3);
// }


// // // TASK 4
// // // User gives 2 numbers (A and B). If A>B then print to the console the result of A+B, 
// // if A=B then the result of A*B, if A<B then A-B.
// const m1= getNumberFromUser('Enter the first number M');
// const n1= getNumberFromUser('Enter the second number N');

// console.log(m1);
// console.log(n1);
// calculateSumOrMultiplication(m1,n1);
// function calculateSumOrMultiplication(m,n){
// let result4='';
// if(m>n){
//     result4=m+n;
// }
// else if(m==n){
//     result4=m*n;
// }
// else {
//     result4=m-n;
// }
// console.log(`Our result is ${result4}`);
// }

// // // TASK 5
// // // User gives 3 numbers (a, b, c). Find out and print to the console the solution of quadratic equation ax^2+bx+c=0.
// const a1=getNumberFromUser("Enter the first number A");
// const b1=getNumberFromUser("Enter the second number B");
// const c1=getNumberFromUser("Enter the third number C");
// calculateQuadraticEquation(a1,b1,c1);
//  function calculateQuadraticEquation(a,b,c){
// let x1, x2;
// let D=Math.sqrt(b*b-4*a*c);
// if(D>0){
// x1=(-b+ Math.sqrt(D)) / (2*a);
// x2=(-b- Math.sqrt(D)) / (2*a);
// }
//  else if(D==0)
//  {
//     x1=x2=-b/2*a;
//  }
//  else{
//     x1=x2=`Roots are not real numbers`;
//  }
//  console.log(`Our roots are: ${x1} ${x2} `);
// }


// // // TASK 6
// // // The user enters a two-digit number. Print the literal representation of this number to the console. For example, typing "25" will display 
// // // "twenty five" in the console, and "13" will display "thirteen".
// const a=getNumberFromUser('Enter a number');
// console.log(a);
// getLetter(a);
// function getLetter(a7){
// let res1;
// let res2;
// let r7=a7%10;
// let f7=a7-r7;

// if(a7==10){
//     res1=`ten`;
//     res2=``;
// }
// else if(a7==11){
//     res1=`eleven`;
//     res2='';
// }
// else if(a7==12){
//     res1=`twelve`;
//     res2='';
// }
// else if(a7==13){
//     res1=`thirteen`;
//     res2='';
// }
// else if(a7==14){
//     res1=`fourteen`;
//     res2='';
// }
// else if(a7==15){
//     res1=`fifteen`;
//     res2='';
// }
// else if(a7==16){
//     res1=`sixteen`;
//     res2='';
// }
// else if(a7==17){
//     res1=`seventeen`;
//     res2='';
// }
// else if(a7==18){
//     res1=`eighteen`;
//     res2='';
// }
// else if(a7==19){
//     res1=`ninteen`;
//     res2='';
// }else{
//     if(f7==20){
//         res1=`twenty`;
//     }
//     else if(f7==30){
//         res1=`thirty`;
//     }
//     else if(f7==40){
//         res1=`forty`;
//     }
//     else if(f7==50){
//         res1=`fifty`;
//     }
//     else if(f7==60){
//         res1=`sixty`;
//     }
//     else if(f7==70){
//         res1=`seventy`;
//     }
//     else if(f7==80){
//         res1=`eighty`;
//     }
//     else if(f7==90){
//         res1=`ninty`;
//     }
    
//     if(r7==1){
//         res2=`one`;
//     }
//     else if(r7==2){
//         res2=`two`;
//     }
//     else if(r7==3){
//         res2=`three`;
//     }
//     else if(r7==4){
//         res2=`four`;
//     }
//     else if(r7==5){
//         res2=`five`;
//     }
//     else if(r7==6){
//         res2=`six`;
//     }
//     else if(r7==7){
//         res2=`seven`;
//     }
//     else if(r7==8){
//         res2=`eight`;
//     }
//     else if(r7==9){
//         res2=`nine`;
//     }
// }
// console.log(`Our number is: ${res1} ${res2}`);
// }

// // // TASK 7
// // // User gives 3 numbers (x, y, r). Find out if point with location (x,y) is inside a circle with radius r? 
// // // (the center of the circle is at the origin)
// const f1=getNumberFromUser('Enter number F');
// const g1=getNumberFromUser('Enter number G');
// const r1=getNumberFromUser('Enter number R');
// let result7;
// console.log(f1);
// console.log(g1);
// console.log(r1);
// findThePlace(f1,g1,r1)
// function findThePlace(f,g,r){
// let res7=Math.sqrt(f*f+g*g,2);
// if (r>res7 && r>=0){
// result7=(`The point is outside of circle`);
// }
// else if(r==res7 && r>=0)
// {
// result7=(`The point touches the circle`);
// }
// else if (r<res7 && r>=0){
//     result7=(`The point is  inside of circle`);
// }
// else{
//     result7=`Radius can be negative`;
// }
// console.log(`${result7}`);
// }