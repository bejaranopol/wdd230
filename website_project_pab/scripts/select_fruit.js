const url="https://bejaranopol.github.io/wdd230/website_project_pab/scripts/data.json";
//const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
async function getFruitData(url) {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.data_fruits[0].nutritions);
    //↑↑ AQUI MOSTRAMOS LA DATA en forma de array


    // note that we reference the prophet array of the data object given the structure of the json file
    displayFruits(data.data_fruits);
    //↑↑ AQUI MOSTRAMOS LA DATA DE LA DATA DEL URL
  }   getFruitData(url);

  const displayFruits = (data_fruits) => {
    const data_select_fruit = document.querySelector('select.fresh_fruits'); // select the output container element
    // ↑↑↑ SALIDA DE LOS ELEMENTOS  AQUI SELECCIONAMOS EL DIV LLAMADO cards ↑↑↑

    data_fruits.forEach((list_fruit)=>{
         // Create elements to add to the data_select_fruit element
        let newList = document.createElement('option');
        let parraf =    document.createElement('span');
        parraf.textContent = `${list_fruit.name}`;
        newList.appendChild(parraf);
        data_select_fruit.appendChild(newList);
        //console.table(parraf.textContent = `${list_fruit.name}`);   
        });// AQUI TERMINA EL LOOP  

        const data_select_fruit1 = document.querySelector('select.fresh_fruits1');
        data_fruits.forEach((list_fruit1)=>{
            // Create elements to add to the data_select_fruit element
           let newList1 = document.createElement('option');
           let parraf1 =    document.createElement('span');
           parraf1.textContent = `${list_fruit1.name}`;
           newList1.appendChild(parraf1);
           data_select_fruit1.appendChild(newList1);  
           });// AQUI TERMINA EL LOOP  

           const data_select_fruit2 = document.querySelector('select.fresh_fruits2');
           data_fruits.forEach((list_fruit2)=>{
            // Create elements to add to the data_select_fruit element
           let newList2 = document.createElement('option');
           let parraf2 =    document.createElement('span');
           parraf2.textContent = `${list_fruit2.name}`;
           newList2.appendChild(parraf2);
           data_select_fruit2.appendChild(newList2);  
           });// AQUI TERMINA EL LOOP  
    }

    //return form
    function doInputOutput(){
      
    let a=document.getElementById('first_name').value;
    let b=document.getElementById('email').value;
    let c=document.getElementById('phone').value;

    let x = document.querySelector('select.fresh_fruits');
    let value = x.value;
    let text = x.options[x.selectedIndex].text;

    let x1 = document.querySelector('select.fresh_fruits1');
    let value1 = x1.value;
    let text1 = x1.options[x1.selectedIndex].text;

    let x2 = document.querySelector('select.fresh_fruits2');
    let value2 = x2.value;
    let text2 = x2.options[x2.selectedIndex].text;
      
    
      document.getElementById('output').innerHTML= "The data you entered are: <br>"+
                                          "Name: "+a+"<br>"+
                                          "Email: "+b+"<br>"+
                                          "Phone: "+c+"<br>"+
                                          "Your fruits: "+text+", "+text1+", "+text2;

document.getElementById('output').innerHTML= "The data you entered are: <br>"+
"Name: "+a+"<br>"+
"Email: "+b+"<br>"+
"Phone: "+c+"<br>"+
"Your fruits: "+text+", "+text1+", "+text2;      
  }

  let user_hour = document.lastModified;       
  document.getElementById('user_envio').innerHTML = user_hour;

 const user_sent1=document.querySelector("div.user_visits");
 const user_sent=document.querySelector("input.abt_submit1");
 user_sent.addEventListener("click",()=> {
   user_sent.classList.toggle("aparecer");
   user_sent1.classList.toggle("aparecer");
 })
