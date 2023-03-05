const url =     ;
async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json(url);
    console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
  }
  
  getProphetData(url);



/* const url = './json/data.json';
async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.business_information);  
    // note that we reference the prophet array of the data object given the structure of the json file
    //displayProphets(data.prophets);
    //↑↑ AQUI MOSTRAMOS LA DATA DE LA DATA DEL URL
  }
  
  getProphetData(url);

  const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element
    // ↑↑↑ SALIDA DE LOS ELEMENTOS  AQUI SELECCIONAMOS EL DIV LLAMADO cards ↑↑↑

    prophets.forEach((prophet)=>{
         // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let h2 =    document.createElement('h2');
        let date_birth = document.createElement('p');
        let place_birth = document.createElement('p');
        let portrait = document.createElement('img');


        // Build the h2 content out to show the prophet's full name - finish the template string
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    date_birth.textContent=`Date of Birth: ${prophet.birthdate}`;
    place_birth.textContent=`Place of Birth: ${prophet.birthplace}`;

     // Build the image portrait by setting all the relevant attribute
     portrait.setAttribute('src', prophet.imageurl);
     portrait.setAttribute('alt', `Portait of ${prophet.name}${prophet.lastname}`);
     portrait.setAttribute('loading', 'lazy');
     portrait.setAttribute('width', '340');
     portrait.setAttribute('height', '440');

    // Append the section(card) with the created elements
    card.appendChild(h2);
    card.appendChild(date_birth);
    card.appendChild(place_birth);
    card.appendChild(portrait);
    cards.appendChild(card);
 

         });// AQUI TERMINA EL LOOP  prophets.forEach((prophet)
    }//aqui termina la funcion displayProphets()
*/