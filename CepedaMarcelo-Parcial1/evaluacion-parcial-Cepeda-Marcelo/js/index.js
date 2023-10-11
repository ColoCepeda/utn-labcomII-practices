const fotos = ["img/juana.jpg", "img/Ceci.jpeg", "img/MarceloCepedaPic.jpg"];
i = 0;

function cambiarFoto() {
 

  const fotoPerfil = document.querySelector(".profile-picture");
  

    let nuevaFoto = fotos[i];

    fotoPerfil.setAttribute("src", nuevaFoto);

    i = (i + 1) % fotos.length;

}

setInterval(cambiarFoto, 15000);
