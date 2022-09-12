const $ = (element) => document.getElementById(element)
const date = moment();
window.onload = async() => {
    console.log('formlario succcess');
    let query = new URLSearchParams(location.search);
    if(query.has('id')){/* si viene cargado id del form */
    /* traigo datos de la pelicula */
    $('botonEditar').hidden=false;
    /* esto muestra el boton */
    try {
        /* lleno el formulario con los datos que tiene esa peli */
       let response = await fetch(sessionStorage.getItem('urlBase'+'/api/movies/'+query.get('id')))
        let result = await response.json()
       
        let movie = result.data;

        $('title').value = movie.title;
        $('awards').value = movie.awards;
        $('rating').value = movie.rating;
        $('release_date').value = moment(movie.release_date).format('YYYY-MM-DD');
        $('length').value = movie.length;
    } catch (error) {
        console.log(error);
    }
    $('formulario').addEventListener('submit',async(e)=>{
        e.preventDefault();
        let body = {
            title : $('title').value,
            rating : $('rating').value,
            awards : $('awards').value,
            release_date : $('release_date').value,
            length : $('length').value
        }
       try {
        let response = await fetch(`${sessionStorage.getItem('urlBase')}/api/movies/update${query.get('id')}`,{
            method : 'PUT',
            body : JSON.stringify(bodyForm),
            headers : {
                'Content-Type' : 'application/json'
            }
        })
       
       } catch (error) {
        
       }
    })
    }else{
        $('botonAgregar').hidden=false; 
    }
   
}