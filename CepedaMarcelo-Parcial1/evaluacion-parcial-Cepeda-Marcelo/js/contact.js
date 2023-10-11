function validarFormulario() {
    const campos = document.querySelectorAll("input, textarea");

    for (const campo of campos) {
        if (campo.value === "") {
            alert("El campo " + campo.name + " es obligatorio");
            campo.focus();
            return false;
        }
    }
    return true;
}

function edad(fechaNacimiento) {
    var fechaNacimientoDate = new Date(fechaNacimiento);
    var fechaActual = new Date();
    var edad = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();
    var mesActual = fechaActual.getMonth();
    var diaActual = fechaActual.getDate();
    var mesNacimiento = fechaNacimientoDate.getMonth();
    var diaNacimiento = fechaNacimientoDate.getDate();

    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
        edad--;
    }
    return edad;
}

function remuneracionNeta(remuneracion) {
    var tipoRelacion = document.querySelector('input[name="tipo_relacion"]:checked');
    var retencion = 0;

    switch (tipoRelacion.value) {
        case "Autonomo":
            retencion = 0.9;
            break;
        case "Monotributista":
            retencion = 1;
            break;
        case "Relación de Dependencia":
            retencion = 0.7;
            break;
        default:
            break;
    }
    return remuneracion * retencion;
}

function categoria(experiencia) {
    if (experiencia < 5) {
        return "Junior";
    } else if (experiencia < 10) {
        return "SemiSenior";
    } else if (experiencia < 15) {
        return "Senior";
    } else {
        return "Expert";
    }
}

function rangoEtario(edad) {
    if (edad < 18) {
        return '<span class="menorDe18"> Menor de 18 años.</span>';
    } else if (edad >= 18 && edad < 30) {
        return '<span class="entre18y30"> Entre 18 y 30 años.</span>';
    } else if (edad >= 30 && edad < 40) {
        return '<span class="entre30y40"> Entre 30 y 40 años.</span>';
    } else {
        return '<span class="mayorDe40"> Mayor de 40.</span>';
    }
}

function changeColor() {
    var relacionInput = document.getElementById("tipo_relacion");
    var tipoRelacion = document.querySelector('input[name="tipo_relacion"]:checked');

    if (tipoRelacion) {
        switch (tipoRelacion.value) {
            case "Autonomo":
                relacionInput.style.backgroundColor = "Magenta";
                break;
            case "Monotributista":
                relacionInput.style.backgroundColor = "Blue";
                break;
            case "Relación de Dependencia":
                relacionInput.style.backgroundColor = "Lime";
                break;
            default:
                relacionInput.style.backgroundColor = "";
                break;
        }
    }
}

function contarEspacios() {
    var textarea = document.getElementById("mensaje");
    var cantidadEspaciosDiv = document.querySelector(".cantidadEspacios");
    var espacios = textarea.value.split(" ");
    var cantEspacios = espacios.length - 1;

    cantidadEspaciosDiv.textContent = "Cantidad de espacios: " + cantEspacios;
}

function mostrarResumen() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const asunto = document.getElementById("asunto").value;
    const fechaNacimiento = document.getElementById("fecha_nacimiento").value;
    const experiencia = document.getElementById("experiencia").value;
    const conocimientos = document.querySelectorAll('input[name="conocimientos"]:checked');
    const remuneracion = document.getElementById("remuneracion").value;
    const tipoRelacion = document.querySelector('input[name="tipo_relacion"]:checked');
    const mensaje = document.getElementById("mensaje").value;

    if (!validarFormulario()) {
        return;
    }

    const resumenHTML = `
                <h2>Datos Candidato</h2>
                <p><strong>Nombre:</strong> ${nombre}</p>
                <p><strong>Email:</strong><a href="mailto:${email}">${email}</a></p>
                <p><strong>Asunto:</strong> ${asunto}</p>
                <p><strong>Fecha de Nacimiento:</strong> ${fechaNacimiento}</p>
                <p><strong>Edad:</strong> ${edad(fechaNacimiento)}</p>
                <p><strong>Años de Experiencia:</strong> ${experiencia}</p>
                <p><strong>Conocimientos:</strong> ${Array.from(conocimientos).map(c => c.value).join(", ")}</p>
                <p><strong>Remuneración Pretendida:</strong>$ ${remuneracion}</p>
                <p><strong>Remuneración Neta:</strong>$ ${remuneracionNeta(remuneracion)}</p>
                <p><strong>Tipo de Relación Pretendida:</strong> ${tipoRelacion ? tipoRelacion.value : "No especificado"}</p>
                <p><strong>Mensaje:</strong> ${mensaje}</p>
                <br><br>
                <h2>Resumen</h2>
                <p><strong>Categoría:</strong> ${categoria(experiencia)}</p>
                <p><strong>Rango Etario:</strong> ${rangoEtario(edad(fechaNacimiento))}</p>

            `;

    document.getElementById("formulario").style.display = "none";
    document.getElementById("resumen").style.display = "block";
    document.getElementById("resumen").innerHTML = resumenHTML;
}