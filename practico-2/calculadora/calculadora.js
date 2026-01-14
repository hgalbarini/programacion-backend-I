const sum = async (...numbers) => {
    try{
        await new Promise (resolve => setTimeout(resolve,2000));
        let res = numbers.reduce((first, second) => first - second);
        console.log(res);
        if (res > 0){
            return res
        }  else {
            throw new Error('El resultado fue negativo');
        };
    } catch (error) {
        throw error;
    }
}

 sum (2,1)
    .then(result => {
        console.log(`Resultado capturado: `, result)
    })
    .catch (error => {
        console.error('There is an error', error.message)
    });
        

/*Gestión de Eventos con JavaScript
En esta demostración, vamos a aplicar los conceptos de promesas y async/await para simular una "calculadora positiva". Esta calculadora realizará operaciones matemáticas y solo retornará valores válidos, es decir, números positivos. Si el resultado de la operación no es válido, la calculadora gestionará adecuadamente el error.

Paso 1: Definir la Función Asíncrona con Promesas
Primero, imaginemos una función que realiza una operación matemática entre dos números. Esta función no devolverá el resultado inmediatamente; en su lugar, devolverá una promesa que se resolverá si el resultado es un número positivo. Si el resultado es negativo o cero, la promesa será rechazada con un mensaje de error.

La idea es que esta función actúe como una operación que puede tardar en completarse, similar a cómo podría tardar una consulta a una base de datos o una solicitud a una API.

Paso 2: Manejo de la Promesa con then y catch
Una vez que la función ha sido definida, necesitaremos manejar la promesa que devuelve. Para hacer esto, se utilizan los métodos then y catch. Then se usa para manejar el resultado exitoso, es decir, cuando la promesa se resuelve con un valor positivo. Por otro lado, catch se utiliza para gestionar cualquier error, en este caso, cuando el resultado es negativo o cero y la promesa es rechazada.

Este enfoque permite ver cómo las promesas pueden controlar el flujo de operaciones asíncronas, gestionando tanto resultados exitosos como errores de manera clara y estructurada.

Paso 3: Uso de async/await para Simplificar el Código
Aunque manejar promesas con then y catch es efectivo, a veces puede hacer que el código sea menos legible cuando se anidan múltiples promesas. Aquí es donde async/await entra en juego para simplificar el proceso.

Cuando una función se declara con async, permite utilizar await para pausar la ejecución de la función hasta que la promesa se resuelva. Si la promesa es rechazada, se puede manejar el error usando un bloque try/catch. Esto hace que el código se lea de manera similar al código síncrono, mejorando la legibilidad y la estructura del programa.

Paso 4: Simulación de la Calculadora Positiva
Ahora, se aplican estos conceptos para simular la calculadora positiva. La función principal realizaría la operación matemática y devolvería un resultado positivo si es válido. Usando async/await, se espera el resultado de la operación y se maneja cualquier error si el resultado no es positivo. Si el resultado es positivo, se continúa con el flujo normal del código; si no, se captura el error y se maneja adecuadamente, como podría ser mostrando un mensaje de advertencia al usuario.

Conclusión
Siguiendo estos pasos, se puede aplicar lo aprendido sobre promesas y async/await para manejar operaciones asíncronas de manera eficiente en JavaScript. Este enfoque no solo mejora la fluidez del código, sino que también facilita la gestión de errores, asegurando que las operaciones se ejecuten de manera confiable y predecible en aplicaciones reales.

*/