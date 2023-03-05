  const url = 'https://bejaranopol.github.io/wdd230/chamber/json/data.json';
    async function getDirectoryData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.business_information); 
    displayDirectory(data.business_information);   }

  
  getDirectoryData(url);

  const displayDirectory = (business_information) => {
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
    


    // **********************************CHANGGING BUTTONS FOR DIRECTORY HTML************************

    const gridbutton = document.querySelector("#directory_grid");
    const listbutton = document.querySelector("#directory_list");
    const display = document.querySelector(".cards");

    // The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

    gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("directory_grid");
	display.classList.remove("directory_list");
    });

    listbutton.addEventListener("click", showList); // example using defined function

    function showList() {
	display.classList.add("directory_list");
	display.classList.remove("directory_grid");
    }

