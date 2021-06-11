const pokemonListCointainer = document.getElementById('pokemon-list');

const URL = ` https://pokeapi.co/api/v2/pokemon/`;


fetch(URL).then((response) => response.json()).then((data) => {
  data.results.forEach((pokemon) => {
  const li = document.createElement('li');
      li.innerHtml = data.results.name; 
      pokemonListCointainer.appendChild(li)  

  })  
  
  // const li = document.createElement('li');
    
    

})
