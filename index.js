"use strict";
/*
Crea variables de diferentes tipos de datos (string, number, boolean, Date). Muestra sus valores en el HTML. Utiliza los siguientes tipos:
string, number, boolean, Date
*/
/*
const texto: string = "Hola, Typescript";

const numero: number = 123;

const booleano: boolean = true;

const fecha: Date = new Date(2024,8,9);

const tipoTextoHtml = document.getElementById('tipoTexto');

if(tipoTextoHtml){
    tipoTextoHtml.textContent = `Texto: ${texto}`;
}

const tipoNumberHtml = document.getElementById('tipoNumber');

if(tipoNumberHtml){
    tipoNumberHtml.innerHTML = `Numero: ${numero}`;
}

const tipoBooleanHtml = document.getElementById('tipoBoolean');

if(tipoBooleanHtml){
    tipoBooleanHtml.innerHTML = `Booleano: ${booleano}`;
}

const tipoDateHtml = document.getElementById('tipoDate');

if(tipoDateHtml){
    tipoDateHtml.innerHTML = `Fecha: ${fecha}`;
}
*/
/*
4.  Crea una función que convierta un número a una cadena de texto. Muestra el resultado en el HTML. La función debe recibir un número y
devolver
su representación en cadena.
*/
/*
const numero: number = 456;

function convertirAcadena(numero: number): string{
    return numero.toString();
}

const mensajeNumberaString = document.getElementById('numberAstring');

if (mensajeNumberaString){
    mensajeNumberaString.innerHTML = `Numero convertido a cadena: ${convertirAcadena(numero)}`;
}
*/
/*
5.  Crea un array de números y una función que sume todos los elementos del array. Muestra la suma en el HTML. La
función debe recibir un array de números y devolver la suma de todos sus elementos.
*/
/*
const arrayNumbers: number[] = [1,2,3,4,5,6]

function sumarNumerosArray(arrayNumbers: number[]): number{
    let suma: number = 0;
    arrayNumbers.forEach((numero) => {
        suma += numero;
    })
    
    return suma;
}

const containerSumaArray = document.getElementById('sumaNumerosArray');

if (containerSumaArray){
    containerSumaArray.innerHTML = `Suma del array: ${sumarNumerosArray(arrayNumbers)}`;
}
*/
/*
6. Crea un objeto que representa a un estudiante con nombre, edad y curso. Muestra al estudiante y sus propiedades en
el HTML.  El objeto debe tener propiedades para el nombre, edad y curso del estudiante.
*/
/*
const estudiante = {
    nombre: "Juan",
    edad: 20,
    curso: "Matematicas",
}

const estudianteContainerNombre = document.getElementById('objetoEstudianteNombre');
const estudianteContainerEdad = document.getElementById('objetoEstudianteEdad');
const estudianteContainerCurso = document.getElementById('objetoEstudianteCurso');

if(estudianteContainerNombre && estudianteContainerCurso && estudianteContainerEdad){
    estudianteContainerNombre.innerHTML = `Estudiante: ${estudiante.nombre}`;
    estudianteContainerEdad.innerHTML = `Edad: ${estudiante.edad}`;
    estudianteContainerCurso.innerHTML = `Curso: ${estudiante.curso}`;
}
*/
/*
7. Define un “type” personalizado para representar una dirección con calle, ciudad y código postal. Usa este tipo
para crear una dirección y muéstrala en el HTML. El tipo debe tener propiedades para calle, ciudad y código postal.
*/
/*
type Direccion = {
    calle: string,
    ciudad: string,
    codigoPostal: number
}

const direccionEspecifica: Direccion = {
    calle: 'Av.Principal',
    ciudad: 'Ciudad',
    codigoPostal: 12345
}

let direccionHtml = document.getElementById('container__direccion');

if(direccionHtml){
    direccionHtml.innerHTML = `Direccion: Calle: ${direccionEspecifica.calle}, Ciudad:${direccionEspecifica.ciudad}, CP:${direccionEspecifica.codigoPostal}`;
}
*/
/*
8.  Define una interfaz para un usuario que tenga nombre, correo y un método para saludar. Implementa esta interfaz en
un objeto y muestra el saludo en el HTML. La interfaz debe definir propiedades para nombre, correo y un método que
devuelva un saludo.
*/
/*
interface usuario{
    nombre: string,
    correo: string,
    saludar(): string
}

const usuarioAna: usuario = {
    nombre: "Ana",
    correo: "anita@gmail.com",
    saludar(){
        return `Hola, mi nombre es ${this.nombre}, y mi correo es ${this.correo}`
    }
}

let infoUsuario = document.getElementById('infoUsuario');

if(infoUsuario){
    infoUsuario.innerHTML = `${usuarioAna.saludar()}`;
}
*/
/*
9.  Crea una clase `Persona` con propiedades para nombre y edad. Implementa un método para presentarse y muestra el resultado en el HTML. La clase
debe tener un constructor para inicializar nombre y edad, y un método que devuelva una cadena con la presentación.
*/
/*
class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number){
        this.nombre = nombre;
        this.edad = edad;
    }

    presentacion(){
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}

const carlos = new Persona('Carlos',30);

let presentacionCarlos = document.getElementById('presentacionCarlos');

if (presentacionCarlos){
    presentacionCarlos.innerHTML = `${carlos.presentacion()}`;
}
*/
/*
Crea una clase genérica `Caja` que almacena un valor de tipo genérico. Implementa un método para obtener el valor y muestra los resultados en el
HTML. La clase debe permitir almacenar y obtener un valor de cualquier tipo.
*/
/*
class Caja<T>{
    private contenido: T;

    constructor(contenido: T){
        this.contenido = contenido;

    }

    setContenido(contenido: T){
        this.contenido = contenido;
    }

    getContenido(){
        return this.contenido;
    }

    public mostrarResultados(){
        if(typeof this.contenido === 'string'){
            return `Contenido de cajaDeTexto: ${this.contenido}`;
        }else{
            return `Contenido de cajaDeNumero: ${this.contenido}`;
        }
    }
}

const cajaTexto = new Caja<string>('Mensaje secreto');

let caja1 = document.getElementById('caja1');

if(caja1){
    caja1.innerHTML = `${cajaTexto.mostrarResultados()}`;
}

const cajaNumeros = new Caja<number>(42);

let caja2 = document.getElementById('caja2');

if(caja2){
    caja2.innerHTML = `${cajaNumeros.mostrarResultados()}`;
}
*/
/*
 Crea una función genérica `identidad` que devuelva el mismo valor que recibe. Usa esta función para diferentes tipos y muestra los resultados en
 el HTML. La función debe aceptar un valor de cualquier tipo y devolverlo sin modificarlo.
*/
/*
function identidad<T>(parametro: T): T{
    return parametro;
}

let identidad1 = document.getElementById('identidad1');

let identidad2 = document.getElementById('identidad2');

if(identidad1 && identidad2){
    identidad1.innerHTML = `Identidad del numero: ${identidad<number>(123)}`;
    identidad2.innerHTML = `Identidad de texto: ${identidad<string>('texto')}`;
}
*/
/*
12. Define una enumeración `Color` con valores para diferentes colores. Usa esta enumeración para asignar un color favorito a una variable y
muéstralo en el HTML. La enumeración debe incluir al menos tres colores diferentes.
*/
var Color;
(function (Color) {
    Color["Verde"] = "Verde";
    Color["Azul"] = "Azul";
    Color["Rojo"] = "Rojo";
})(Color || (Color = {}));
const colorFavorito = Color.Azul;
const colorFavoritoHtml = document.getElementById('colorFavorito');
if (colorFavoritoHtml) {
    colorFavoritoHtml.innerHTML = `Color Favorito: ${colorFavorito}`;
}
