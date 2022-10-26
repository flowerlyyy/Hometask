const a7=+prompt('Enter a number');
console.log(a7);
let res1;
let res2;
let r7=a7%10;
let f7=a7-r7;

if(a7==10){
    res1=`ten`;
    res2=``;
}
else if(a7==11){
    res1=`eleven`;
    res2='';
}
else if(a7==12){
    res1=`twelve`;
    res2='';
}
else if(a7==13){
    res1=`thirteen`;
    res2='';
}
else if(a7==14){
    res1=`fourteen`;
    res2='';
}
else if(a7==15){
    res1=`fifteen`;
    res2='';
}
else if(a7==16){
    res1=`sixteen`;
    res2='';
}
else if(a7==17){
    res1=`seventeen`;
    res2='';
}
else if(a7==18){
    res1=`eighteen`;
    res2='';
}
else if(a7==19){
    res1=`ninteen`;
    res2='';
}else{
    if(f7==20){
        res1=`twenty`;
    }
    else if(f7==30){
        res1=`thirty`;
    }
    else if(f7==40){
        res1=`forty`;
    }
    else if(f7==50){
        res1=`fifty`;
    }
    else if(f7==60){
        res1=`sixty`;
    }
    else if(f7==70){
        res1=`seventy`;
    }
    else if(f7==80){
        res1=`eighty`;
    }
    else if(f7==90){
        res1=`ninty`;
    }
    
    if(r7==1){
        res2=`one`;
    }
    else if(r7==2){
        res2=`two`;
    }
    else if(r7==3){
        res2=`three`;
    }
    else if(r7==4){
        res2=`four`;
    }
    else if(r7==5){
        res2=`five`;
    }
    else if(r7==6){
        res2=`six`;
    }
    else if(r7==7){
        res2=`seven`;
    }
    else if(r7==8){
        res2=`eight`;
    }
    else if(r7==9){
        res2=`nine`;
    }
}
console.log(`Our number is: ${res1} ${res2}`);