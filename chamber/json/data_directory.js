/*const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);  
    // note that we reference the prophet array of the data object given the structure of the json file
    //displayProphets(data.prophets);
    //↑↑ AQUI MOSTRAMOS LA DATA DE LA DATA DEL URL
  }
  
  getProphetData(url);*/






  const url = 'https://bejaranopol.github.io/wdd230/chamber/json/data.json';
    async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.business_information); 
    displayProphets(data.business_information);   }




  
  getProphetData(url);

  const displayProphets = (business_information) => {
    const cards = document.querySelector('div.cards'); // select the output container element
    // ↑↑↑ SALIDA DE LOS ELEMENTOS  AQUI SELECCIONAMOS EL DIV LLAMADO cards ↑↑↑

    business_information.forEach((data)=>{
         // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let dname =    document.createElement('h2');
        let daddress = document.createElement('p');
        let dphone = document.createElement('p');
        let dnumber = document.createElement('p');
        let dwebsite = document.createElement('p');
        let dmembership_level = document.createElement('p');
        let dsocial_media = document.createElement('p');  
        let dportrait = document.createElement('img');


        // Build the h2 content out to show the prophet's full name - finish the template string
    dname.textContent = `${data.name}`;
    daddress.textContent=`Address: ${data.address}`;
    dphone.textContent=`Phone: ${data.phone}`;
    dnumber.textContent=`Number: ${data.number}`;
    dwebsite.textContent=`Website: ${data.website}`;
    dmembership_level.textContent=`Member Ship Level: ${data.membership_level}`;
    dsocial_media.textContent=`Social Media: ${data.social_media}`;


     // Build the image portrait by setting all the relevant attribute
     dportrait.setAttribute('src', data.image);
     dportrait.setAttribute('alt', `Portait of ${data.name}`);
     dportrait.setAttribute('loading', 'lazy');
     dportrait.setAttribute('width', '500');
     dportrait.setAttribute('height', '500');

    // Append the section(card) with the created elements
    card.appendChild(dname);
    card.appendChild(daddress);
    card.appendChild(dphone);
    card.appendChild(dnumber);
    card.appendChild(dwebsite);
    card.appendChild(dmembership_level);
    card.appendChild(dsocial_media);
    card.appendChild(dportrait);
    cards.appendChild(card);

 

         });// AQUI TERMINA EL LOOP  prophets.forEach((prophet)
    }//aqui termina la funcion displayProphets()
    