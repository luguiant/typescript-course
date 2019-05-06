interface Estudiante {
   nombre: string,
   semestre: number 
}

function getEstudiante(est: Estudiante): void{
    console.log(est);
}

let miEstudiante: Estudiante;

miEstudiante = {
    nombre: 'juan',
    semestre: 6
}

getEstudiante(miEstudiante);