// nombre del usuario
var nombreUsuario = prompt("Por favor, ingresa tu nombre:");

// edad del usuario
var edadUsuario = prompt("¿Cuántos años tienes?");

// Convertir la entrada a un número
var edadUsuario = Number(edadUsuario);

if (edadUsuario < 18) {
  alert("Eres un entrenador pokemon");
} else {
  alert("Eres maestro pokemon.");
}

// color de fondo
var colorFondo = prompt("¿Qué color quieres que sea el fondo de la página web? Escribirlo en ingles");

document.body.style.backgroundColor = colorFondo;

document.write("Hola " + nombreUsuario + ", tienes " + edadUsuario + " años. " +
               "Has elegido el color " + colorFondo + " para el fondo de la página.");
