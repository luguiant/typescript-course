let miString1: string = 'texto';

function arrayString(texto1: string): void {
    for(let letra = 0; letra < texto1.length; letra++ ){
        console.log(texto1[letra]);
    }
}

arrayString(miString1);

function parametrosRest(texto: string, ...aTexto: string[]): void{
    console.log(texto+' '+aTexto.join(" "));
}

parametrosRest('chicos', 'estos son', 'parametro rest');