const $ = (element) => document.getElementById(element)
sessionStorage.setItem("urlBase", "http://localhost:3031");
/* queda guardado con clave urlBase y valor localhost */

window.onload = async () => {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  /* agrega el contenedor creado al div root de html  */
  app.appendChild(container);

  if(!JSON.parse(localStorage.getItem("favorites"))){
    const favorites = []
    localStorage.setItem("favorites", JSON.stringify(favorites))

  }
  // Aqui debemos agregar nuestro fetch

  try {
    let response = await fetch(
      sessionStorage.getItem("urlBase") + "/api/movies"
    );
    let peliculas = await response.json();
    let data = peliculas.data;
/* data es una propiedad del objeto presente pelicula*/
    data.forEach((movie) => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h1 = document.createElement("h1");
      h1.textContent = movie.title;

      const p = document.createElement("p");
      p.textContent = `Rating: ${movie.rating}`;

      const duracion = document.createElement("p");
      duracion.textContent = `Duración: ${movie.length}`;

      const verMas = document.createElement("a");
      verMas.innerHTML = '<i class= "far fa-eye"></i>';
      verMas.setAttribute('class', 'botonAgregar');

      verMas.href = "formulario.html?id="+movie.id
     



      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
      if (movie.genre !== null) {
        const genero = document.createElement("p");
        genero.textContent = `Genero: ${movie.genre.name}`;
        card.appendChild(genero);
      }
      card.appendChild(duracion);
      /* botones de formulario */
      const buttonEdit = document.createElement("a");
      buttonEdit.setAttribute("href", "formulario.html?id=" + movie.id); /* query string */
      buttonEdit.setAttribute("class", "botonAgregar");
      buttonEdit.textContent = "EDITAR";
      card.appendChild(buttonEdit);

      const buttonDelete = document.createElement("button");
     
      buttonDelete.setAttribute("class", "botonBorrar");
      buttonDelete.setAttribute("id", "botonBorrar"+movie.id);
      buttonDelete.textContent = "Eliminar";
      card.appendChild(buttonDelete);

      const star = document.createElement("button");
      star.setAttribute("class", "favorita");
      star.innerHTML = '<i class= "far fa-star"></i>'
      star.setAttribute('id','favoriteOff'+movie.id);
      card.appendChild(star);
      star.onclick = () => {
        $('favoriteOff' + movie.id).setAttribute('hidden',true);
        $('favoriteOn' + movie.id).removeAttribute('hidden');
        const favorites = JSON.parse(localStorage.getItem('favorites'));
        favorites.push(movie.id);
        localStorage.setItem("favorites", JSON.stringify(favorites));
       console.log(localStorage.getItem("favorites"));
        
      }
      const star2 = document.createElement("button");
      star2.setAttribute("class", "favorita");
      star2.innerHTML = '<i class= "far fa-star"></i>'
      star2.setAttribute('id','favoriteOff'+movie.id);
      card.appendChild(star2);
      star2.onclick = () => {
        $('favoriteOff' + movie.id).setAttribute('hidden',true);
        $('favoriteOn' + movie.id).removeAttribute('hidden');
        const favorites = JSON.parse(localStorage.getItem('favorites'));
        favorites.push(movie.id);
        localStorage.setItem("favorites", JSON.stringify(favorites));
       console.log(localStorage.getItem("favorites"));
        
      }
      const star3 = document.createElement("button");
      star3.setAttribute("class", "favorita");
      star3.innerHTML = '<i class= "far fa-star"></i>'
      star3.setAttribute('id','favoriteOff'+movie.id);
      card.appendChild(star3);
      star3.onclick = () => {
        $('favoriteOff' + movie.id).setAttribute('hidden',true);
        $('favoriteOn' + movie.id).removeAttribute('hidden');
        const favorites = JSON.parse(localStorage.getItem('favorites'));
        favorites.push(movie.id);
        localStorage.setItem("favorites", JSON.stringify(favorites));
       console.log(localStorage.getItem("favorites"));
        
      }
      const star4 = document.createElement("button");
      star4.setAttribute("class", "favorita");
      star4.innerHTML = '<i class= "far fa-star"></i>'
      star4.setAttribute('id','favoriteOff'+movie.id);
      card.appendChild(star4);
      star4.onclick = () => {
        $('favoriteOff' + movie.id).setAttribute('hidden',true);
        $('favoriteOn' + movie.id).removeAttribute('hidden');
        const favorites = JSON.parse(localStorage.getItem('favorites'));
        favorites.push(movie.id);
        localStorage.setItem("favorites", JSON.stringify(favorites));
       console.log(localStorage.getItem("favorites"));
        
      }
      const star5 = document.createElement("button");
      star5.setAttribute("class", "favorita");
      star5.innerHTML = '<i class= "far fa-star"></i>'
      star5.setAttribute('id','favoriteOff'+movie.id);
      card.appendChild(star5);
      star5.onclick = () => {
        $('favoriteOff' + movie.id).setAttribute('hidden',true);
        $('favoriteOn' + movie.id).removeAttribute('hidden');
        const favorites = JSON.parse(localStorage.getItem('favorites'));
        favorites.push(movie.id);
        localStorage.setItem("favorites", JSON.stringify(favorites));
       console.log(localStorage.getItem("favorites"));
        
      }
  
    });
  } catch (error) {
    console.error;
  }
 
 
};
