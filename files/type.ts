type estudiante = {
    nombre: string,
    semestre: number,
    celular: number,
    carrera: string,
    getEstudiante: ()=>string 
}

let nuevoEst: estudiante = {
    nombre: "pedro",
    semestre: 6,
    celular: 3119363636,
    carrera: 'informatica',
    getEstudiante (){
        return this.nombre+ ' semestre: '+ this.semestre;
    }
}

console.log(nuevoEst.getEstudiante());
