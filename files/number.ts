let miNumero: number;
miNumero = 2;


if( miNumero > 1){
    console.log('Si es mayor que 1');
}

function fnNumber(): number {
    return Math.random();
}

console.log(fnNumber);

let aNumbers: number[];

function fnAnumbers(): number[] {
    let numbersArray: number[] =  [];
    for(let i = 0; i < 10; i++){
        numbersArray[i] = Math.random();
    }
    return numbersArray;
}
aNumbers = fnAnumbers();


console.log(aNumbers);

function maxNumber(aNumbers: number[]): number {
    return Math.max(...aNumbers);
}

console.log('El numero mayor es: ', maxNumber(aNumbers));



function forfoIterator(numbers: number[]): void{
    console.log('funcion forfoIterator: \n');
    for(let number of numbers){
        console.log(number);
    }
}

forfoIterator(aNumbers);