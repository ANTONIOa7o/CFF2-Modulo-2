// Los nombres de las clases comienzan en MAYUSCULA
class Alumno{
    // Caracteristicas del objeto
    // Propiedades
    // Variables globales
    id;
    nombre;
    apellido;
    nota;

    // Constructor
    // El puntero this sirve para difenciar las propiedades 
    // de los argumentos recibidos en el constructor
    constructor(id, nombre, apellido, nota){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.nota = nota;
    }

    // Acciones podemos llevar a cabo con ese objeto
    // metodos
    // funciones
    mostrarInformacion(){
        document.write(`Datos del alumno: id ${this.id}, nombre ${this.nombre},apellido ${this.apellido}, nota ${this.nota}` + "<br/>");
    }
}