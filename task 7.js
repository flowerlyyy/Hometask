const f=+prompt('Enter number F');
const g=+prompt('Enter number G');
const r=+prompt('Enter number R');
let result7;
console.log(f);
console.log(g);
console.log(r);
let res7=Math.sqrt(f*f+g*g,2);
if (r>res7 && r>=0){
result7=(`The point is outside of circle`);
}
else if(r==res7 && r>=0)
{
result7=(`The point touches the circle`);
}
else if (r<res7 && r>=0){
    result7=(`The point is  inside of circle`);
}
else{
    result7=`Radius can be negative`;
}
console.log(`${result7}`);