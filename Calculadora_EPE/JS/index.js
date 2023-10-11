function calculate(){
    let message = document.querySelector("#result");
    const quantity = parseFloat(document.querySelector("#cantidad").value);
    const selectElement = document.querySelector("#tipo");
    const type = selectElement.value;
    const selectElement2 = document.querySelector("#zona");
    const zone = selectElement2.value;
    const cost = 102;
    let price = 0;
    let iva = 0;

    switch(zone){
        case "centro":
            price = 5.80
            break
        case "sur":
            price = 5.40
            break
        case "oeste":
            price = 5.35
            break
        case "este":
            price = 5.60
            break
        default:
            break
    }

    switch(type){
        case "residencial":
            iva = 0.21
            break
        case "industrial":
            iva = 0.27
            break
        default:
            break
    }

    const totalPrice = cost + (quantity * price) * (1 + iva)
    
    if (quantity >= 0) {
        message.innerHTML = `El precio total es de $${totalPrice.toFixed(2)}`;    
    }else{
        message.innerHTML = `El valor ingresado es incorrecto.`;
    }
}