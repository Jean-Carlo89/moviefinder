const movies = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes')

moviesBack = movies.then(printMovies)

//console.log(moviesBack)

function printMovies(moviesBack){
    const movies = moviesBack.data  
       // console.log(movies) 
    const box = document.querySelector('.movies')
       for(let i =0; i<movies.length;i++){
           box.innerHTML+=`
           <div class="movie">
              <img src="${movies[i].imagem}">
              <div class="title">${movies[i].titulo}</div>
              <button onclick="buy()">
                Comprar
                <ion-icon name="cart-outline"></ion-icon>
              </button>
              </div>
            </div>-->
           `
       }


        
        

}