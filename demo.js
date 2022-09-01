var nombre = "Juan";
var apellido = "Perez";
var edad = 30;
var fechaDeNacimiento = '1985/01/01';
var direccion = "Av. Siempreviva 742";
var mayor_de_edad = true | false;


console.log(mayor_de_edad);











var libros_favoritos = ["El señor de los anillos", "Harry Potter", "El principito", "Harry Potter 2", "Dumbo"];
for( var i = 0;      i < libros_favoritos.length;         i++  ) {
    if(libros_favoritos[i] == "Dumbo") {
        console.log("Encontramos el libro DUMBO en la posición ", i);
    }else{
        console.log("El libro no es Dumbo");
    }
}

