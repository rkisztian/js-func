
function fv(param1,param2){

}

let fv2 = function(param1, param2){
    console.log(param1,param2);
}


fv2(1,145);

/*
document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('szinez').addEventListener('click',function(){
        document.body.style.backgroundColor = 'lightblue';
    })
});
*/

document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('szinez').addEventListener('click',()=>{
        document.body.style.backgroundColor = 'lightblue';

        setTimeout(()=> {
            document.body.style.backgroundColor = 'White';
        }, 2000);
    })
});


//Ha a kacsacsőröket megfordítjuk, akkor csökkenő sorrendben lesz.
let t = [ 45, 2 , 544, -234];

/*
t.sort((a, b)=>{
    //console.log('Hasonlit', a, b)
    if(a < b){
        return -1;
    }else if(a > b){
        return 1;
    }else{
        return 0;
    }
});
*/

t.sort((a, b) => {return a - b; });

t = t.filter(e  =>  e > 0);
console.log(t);
t = t.map(e => e*e);
console.log(t);
t = t.map(e => e.toFixed(2))
console.log(t);
t.forEach((e,index) => console.log(index, e))


class Kutya{}

// Mellékhatás nélkül
1 + 1;
Math.abs(-8);
new Kutya();
new Date();

//mellékhatással
szam++;
szam = 5;
t.sort();
console.log("aa");
Math.random();


//Nincs mellékhatása
//Csak a paraméterektől függ
// - TISZTA FÜGGVÉNY
function fuggveny(param1){
    return param1 * param1;
}

function nemTiszta(){
    document.body.style.backgroundColor = "red";
}

function nemTiszta2(){
    return document.body.style.backgroundColor;
}


