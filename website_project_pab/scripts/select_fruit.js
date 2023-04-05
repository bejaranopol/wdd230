const url="";
//const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
async function getFruitData(url) {
    const response = await fetch(url);
    const data = await response.json();
   // console.table(data.name);  
   // console.table(data);
   console.log(data_fruits.name);
    
}

    // note that we reference the prophet array of the data object given the structure of the json file
   // displayFruits(data.name);
    //↑↑ AQUI MOSTRAMOS LA DATA DE LA DATA DEL URL
  }   getFruitData(url);

  