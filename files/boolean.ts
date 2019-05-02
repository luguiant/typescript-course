
let esDelPoli: boolean = true;
let esDeUdA: boolean;



function deQueUniversidad(): boolean {
    if( esDelPoli ){
        return true;
    }
    return false;

    //return esDelPoli === true ? true : false;
}

console.log(deQueUniversidad());

let aUniversidad: boolean[];
aUniversidad = [true,false,true];

function fnAuniversidad(){
    if( aUniversidad[1] ){
        console.log('hola mundo');
    } else {
        console.log('hola poli');
    }
}

fnAuniversidad();