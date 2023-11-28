                   /* Fundamentos - API  */

// module.js
const login = () => {
    console.log('Realizando operaciones de inicio de sesión...');
};

module.exports = login;

// main.js
const loginFunction = require('./module');

loginFunction();

const LIKES = 10;

module.exports = {
  login,
  LIKES
};


const { login, LIKES } = require('./module');

login();
console.log(LIKES);

                     /* Local storage */

//Guardar un Objeto en el LocalStorage

const datos = {
    nombre: "Dennis",
    edad: 20,
    email: "dennis.catana@epn.edu.ec"
};
// Convertir el objeto a formato JSON y guardarlo en el LocalStorage bajo la clave 'objetoGuardado'
  localStorage.setItem('objetoGuardado', JSON.stringify(datos));

// Obtener un Objeto en el LocalStorage
const datos2 = JSON.parse(localStorage.getItem('objetoGuardado'));
// Ahora datos2 contendrá el objeto guardado previamente en el LocalStorage
console.log(datos2);

// Eliminar un Objeto en el LocalStorage
localStorage.removeItem('objetoGuardado');
