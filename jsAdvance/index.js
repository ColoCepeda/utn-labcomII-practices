// Simula conexión a API con tiempo de respuesta aleatorio
function simulateApiConnection(callback) {
    setTimeout(function () {
        let response = "respuesta del servidor"
        callback(response)
    }, randomIntFromIntervaI(1000, 1000));
}
// Genera números random
function randomIntFromIntervaI(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
// Llamo a la API y le paso una función (callback)
simulateApiConnection(function (response) {
    console.log(response);
});
