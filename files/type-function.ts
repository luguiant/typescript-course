function sumar(x,y): number {
    return x+y;
}

let miFuncionSuma = sumar;
console.log(miFuncionSuma(4,6));


function multiplicar(x: number, y: number): number{
    return x*y;
}

function resta(x: number, y: number): number {
    return (x-y);
}


let miFuncionMath: (x:number, y:number) => number;
miFuncionMath = multiplicar;

console.log('Multiplica: '+ miFuncionMath(2,8)+'\n');

miFuncionMath = resta;
console.log('Resta: '+miFuncionMath(5,4)+'\n');


