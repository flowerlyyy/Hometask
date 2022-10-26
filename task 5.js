const a=+prompt("Enter the first number A");
const b=+prompt("Enter the second number B");
const c=+prompt("Enter the third number C");
let x1, x2;
let D=Math.sqrt(b*b-4*a*c);
if(D>0){
x1=(-b+ Math.sqrt(D)) / (2*a);
x2=(-b- Math.sqrt(D)) / (2*a);
}
 else if(D==0)
 {
    x1=x2=-b/2*a;
 }
 else{
    x1=x2=`Roots are not real numbers`;
 }
 console.log(`Our roots are: ${x1} ${x2} `);