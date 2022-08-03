function handleTags(arrayOfAllElements){

    /* ArrayOfAllElements[0] c'est le tableau des ingredients

       ArrayOfAllElements[1]  c'est le tableau des appareils

       ArrayOfAllElements[2] c'est le tableau des ustensiles

    */

    document.querySelector("#liste-ingredients").addEventListener("click", (event)=>{
      
          if(event.target !== event.currentTarget){

              const ingredient = event.target.textContent;

              event.target.remove();

              displayTag(ingredient, "Ingredients");

          }
        
    });

    document.querySelector("#liste-appareils").addEventListener("click", (event)=>{
      
        if(event.target !== event.currentTarget){

            const appareil = event.target.textContent;

            displayTag(appareil, "Appareils");

        }
      
    });

    document.querySelector("#liste-ustensiles").addEventListener("click", (event)=>{
      
        if(event.target !== event.currentTarget){

            const ustensile = event.target.textContent;

            displayTag(ustensile, "Ustensiles");

        }
      
    });


    function displayTag(tagName, tagCategory){
        
        let color = "";

        if(tagCategory === "Ingredients"){

            color = "#3282F7";

        }

        if(tagCategory === "Appareils"){

            color = "#68D9A4";

        }

        if(tagCategory === "Ustensiles"){

             color = "#ED6454";

        }


        const tag = `
        
        <div class="tag" style= "background-color:${color}">
          
            <span>${tagName}</span>
       
            <img class="img_croix" src="img/icone-croix-annuler.png" alt="croix pour annuler">
        
        </div>
        
        `;

        document.querySelector("#tags").insertAdjacentHTML("beforeend", tag);

    }


    function getTheUserinput(){

         const allinputs = document.querySelectorAll(".filters-tags-area-input");

         allinputs.forEach((input, index)=>{

                input.addEventListener("input", ()=>{
                     
                      const filteredArray = filterDetails(input.value, arrayOfAllElements[index]);

                      const inputNextSiblingUl = input.nextElementSibling;

                      displayDetails(filteredArray, inputNextSiblingUl);

                });

         })

    }

    getTheUserinput();


}