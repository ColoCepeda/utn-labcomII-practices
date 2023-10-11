let tarjeta = document.getElementById('card');

async function consultarCiudad(){

    let ciudad = document.getElementById('selector-ciudad').value;

    if (ciudad!='') {
        const api_id = "05718ec939e636d643136a9eb682f0dd";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${api_id}&units=metric&lang=es`;
        // console.log(url)

        try {
            const response = await fetch(url);
            //console.log(response)
            if (response.ok) {
                const data = await response.json();
                mostrarCard(data)
                console.log(data);
            }
            /* tarjeta.innerHTML = `
            <h3> ${data.name}</h3>
            <img src="http://openweathermap.org/img/wn/${weather[icon]}@2x.png" alt="">

            ` */

        } catch (err) {
            tarjeta.innerHTML = 'Hubo un error' + err;
        }
    }else{
        alert('Seleccione una ciudad');
    }
}

function mostrarCard(data) {
    
    const {name, sys:{country}, wind:{speed}, main:{temp, feel_like, humidity, pressure}, weather:[arr]} = data;

    tarjeta.innerHTML = `
            <h3> ${name}</h3>
            <img src="http://openweathermap.org/img/wn/${arr.icon}@2x.png" alt="">
            `;
    
}