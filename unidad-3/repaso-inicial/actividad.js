const TOTAL = 10;
const MIN = 1;
const MAX = 5;
const generarNumerosRandom = () => {
    return new Promise(  ( resolve) => {
        setTimeout( () => {
            const results = {};
            for (let i = 0; i < TOTAL; i++) {
                const random = Math.floor( Math.random() * ( MAX - MIN + 1) ) + MIN;
                results[random] = (results[random] || 0 ) + 1;
            }
            resolve( results );
        }, 2000 ); // Simulamos la demora
    })
}

//terminar esto
async function executor() {
    try{
    console.log("generando nros random inside try");
    let results = await generarNumerosRandom();
    console.log(results);
    let results2 = generarNumerosRandom().resolve;
    console.log(results2);
    } catch (error){
    console.log("there was an error");
    } finally {
    console.log("finalizado");
}}

console.log("generando nros random con .then");
generarNumerosRandom().then(result => console.log(result));

//console.log('Inicio del Script....');
//generarNumerosRandom();
//console.log('Fin del Script....');

/*ACTIVIDAD EN CLASE
Proyecto de node
Crear un proyecto de node que genere 10000 números aleatorios en un rango de 1 a 20. Indicar por consola la finalización de esta operación con un mensaje.

Mediante el uso de Promesas, crear un objeto cuyas claves sean los números salidos y el valor asociado a cada clave será la cantidad de veces que salió dicho número. Representar por consola los resultados.

Nota: Considerar que esta operación debe realizarse de forma asíncrona.

RESOLVER LA PROMESA.
*/