function handleTags(arrayOfAllElements, arrayOfRecipes){

     const parentListeIngredients = document.querySelector("#liste-ingredients");

     const parentListeAppareils = document.querySelector("#liste-appareils");

     const parentListeUstensiles = document.querySelector("#liste-ustensiles");

// ajout de cette variable pour pouvoir récupérer l'ancienne valeur tableau des ingrédients avant la recherche, ainsi lorsque l'on cliquera sur la croix du tag, ça entrainera l'affichage des recettes avant la recherche.

     let oldValueArrayOfRecipes;

    /* ArrayOfAllElements[0] c'est le tableau des ingredients

       ArrayOfAllElements[1]  c'est le tableau des appareils

       ArrayOfAllElements[2] c'est le tableau des ustensiles

    */

    parentListeIngredients.onclick = (event)=>{

          if(event.target !== event.currentTarget){

              const ingredient = event.target.textContent;

              displayTag(ingredient, "Ingredients"); 

              oldValueArrayOfRecipes = [...arrayOfRecipes];

              arrayOfRecipes = filterIngredients(arrayOfRecipes,ingredient);

              displayRecipes(arrayOfRecipes)

              listingAllKeywords(arrayOfRecipes);

              deleteTag();
          }
        
    };
  
    

    parentListeAppareils.onclick = (event)=>{
      
        if(event.target !== event.currentTarget){

            const appareil = event.target.textContent;

            displayTag(appareil, "Appareils");

            oldValueArrayOfRecipes = [...arrayOfRecipes];

            arrayOfRecipes = filterAppareils(arrayOfRecipes, appareil);

            displayRecipes(arrayOfRecipes);

            listingAllKeywords(arrayOfRecipes);

            deleteTag();

        }
      
    };

    parentListeUstensiles.onclick = (event)=>{
      
        if(event.target !== event.currentTarget){

            const ustensile = event.target.textContent;

            displayTag(ustensile, "Ustensiles");

            oldValueArrayOfRecipes = [...arrayOfRecipes];

            arrayOfRecipes = filterUstensiles(arrayOfRecipes, ustensile);

            displayRecipes(arrayOfRecipes) 

            listingAllKeywords(arrayOfRecipes);

            deleteTag();

        }
      
    };


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
        
        <div class="tag" style= "background-color:${color}" data-category="${tagCategory}">
          
            <span>${tagName}</span>
       
            <img class="img_croix" src="img/icone-croix-annuler.png" alt="croix pour annuler">
        
        </div>
        
        `;

        document.querySelector("#tags").insertAdjacentHTML("beforeend", tag);

    }

// FERMETURE DES TAGS
    function deleteTag(){

        document.querySelector("#tags").onclick = (event)=>{

             if(event.target !== event.currentTarget){

                   if(event.target.className === "img_croix"){

                        const tag = event.target.parentNode;
                      
                        tag.remove();

                        if(document.querySelectorAll(".tag").length === 0){

                            displayRecipes(recipes);
                           

                            return listingAllKeywords(recipes);

                        } 
                        
                        // j'affiche l'ancienne valeur du tableaux des recettes 
        
                        displayRecipes(oldValueArrayOfRecipes);

                        // retourne la liste des mots clefs

                        return listingAllKeywords(oldValueArrayOfRecipes);

                   }
             }

        }

    }


// getTheUserinput = obtenir l'entrée utilisateur
    function getTheUserinput(){

         const allinputs = document.querySelectorAll(".filters-tags-area-input");

         allinputs.forEach((input, index)=>{

                input.addEventListener("input", ()=>{
               
                      const filteredArray = filterDetails(input.value, arrayOfAllElements[index]);

                      const inputNextSiblingUl = input.nextElementSibling;

                      displayDetails(filteredArray, inputNextSiblingUl);

                });

         });

    } 

    getTheUserinput();
}