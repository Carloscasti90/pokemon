



function buscarPokemon(url = "https://pokeapi.co/api/v2/pokemon") {

    fetch(url)
    .then( response => response.json())
    .then( data => {
        let pokemons = data.results;
        console.log(pokemons);
        fetch(pokemons.url)
        .then(response1 => response1.json())
        .then(data1 => {
            console.log(data1.))
        })

    });
}




function imprimirPersonajes(list = []) {
    document.querySelector("#printer2").innerHTML = ""
    document.querySelector("#botonesPagina2").innerHTML = ""
    list.results.forEach(personaje => {

        document.querySelector("#printer2").innerHTML += `
       
        <div class="card" style="width: 18rem;">
        <img src="${pokemons.image} ">
        <div class="card-body">
          <h5 class="card-title">${personaje.name}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">${personaje.status}</h6>
          <p class="card-text">${personaje.species}</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>

`
    });
    

}

buscarPokemon();



