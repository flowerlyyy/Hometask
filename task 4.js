const m= +prompt('Enter the first number M');
const n= +prompt('Enter the second number N');
let result4='';
console.log(m);
console.log(n);
if(m>n){
    result4=m+n;
}
else if(m==n){
    result4=m*n;
}
else {
    result4=m-n;
}
console.log(`Our result is ${result4}`);