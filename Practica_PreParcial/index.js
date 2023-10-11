function changeProductImage() {
    const color = document.querySelector("select").value;
    const image = document.querySelector("#mainProductImage");
  
    image.setAttribute("src", `images/${color}.jpg`);
  }

  function calculatePrice() {
    const selectElement = document.querySelector("#capacidad");
    const capacity = selectElement.value;
    const quantity = parseInt(document.querySelector("#cantidad").value);
    let message = document.querySelector("#result");
    let price = 0;
  
    switch(capacity){
        case "128":
            price = 15000
            break
        case "256":
            price = 16500
            break
        case "512":
            price = 18000
            break
        default:
            price = 0;
            break;
    }
    
  
    const totalPrice = price * quantity;
  
    message.innerHTML = `El precio total es de $${totalPrice}`;
  }
  

