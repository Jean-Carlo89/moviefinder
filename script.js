const movies = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes')

moviesBack = movies.then(printMovies)

//console.log(moviesBack)

//const movies = moviesBack.data  

function printMovies(moviesBack){
    const movies = moviesBack.data  
       // console.log(movies) 
    const box = document.querySelector('.movies')
       for(let i =0; i<movies.length;i++){
           box.innerHTML+=`
           <div class="movie">
              <img src="${movies[i].imagem}">
              <div class="title">${movies[i].titulo}</div>
              <button onclick="buy(this)" id="${movies[i].id}">
                Comprar
                <ion-icon name="cart-outline"></ion-icon>
              </button>
              </div>
            </div>-->
           `
       }
}


function buy(clickedMovie){
    const name = prompt('Qual é o sue nome?')
    const seatNumber = parseInt(prompt('Qual é o número de assentos'))
    //console.log(clickedMovie.getAttribute('id'))
    const movieId="clickedMovie.getAttribute('id')"
    const sendInfo = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes/${movieId}/ingresso`,{nome:name, quantidade:seatNumber})

    sendInfo.then(success)
    sendInfo.catch(errorManagement)
}

function success(){

    alert("Ingresso comprado com sucesso!")
}

function errorManagement(){

    alert('Os ingressos para este filme estão esgotados!')
}