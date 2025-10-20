// Lista de apartados de la galería
const apartados = [
  {
    titulo: "Naturaleza",
    imagenes: ["img/foto1.jpg", "img/foto2.jpg"]
  },
  {
    titulo: "Tecnología",
    imagenes: ["img/tecnologia1.jpg", "img/tecnologia2.jpg"]
  },
  {
    titulo: "Personas",
    imagenes: ["img/persona1.jpg", "img/persona2.jpg"]
  }
];

// Contenedor de la galería
const galeriaDiv = document.getElementById("galeria");

// Recorremos los apartados y los agregamos al HTML
apartados.forEach(apartado => {
  // Crear título
  const titulo = document.createElement("h2");
  titulo.textContent = apartado.titulo;
  galeriaDiv.appendChild(titulo);

  // Crear contenedor de imágenes
  const contenedor = document.createElement("div");
  contenedor.classList.add("apartado");

  apartado.imagenes.forEach(imgSrc => {
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = apartado.titulo;
    contenedor.appendChild(img);
  });

  galeriaDiv.appendChild(contenedor);
});
