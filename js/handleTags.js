function handleTags(arrayOfAllElements, arrayOfRecipes){

     const parentListeIngredients = document.querySelector("#liste-ingredients");

     let oldValueArrayOfRecipes;

     const copyArrayOfRecipes = [...arrayOfRecipes];

    /* ArrayOfAllElements[0] c'est le tableau des ingredients

       ArrayOfAllElements[1]  c'est le tableau des appareils

       ArrayOfAllElements[2] c'est le tableau des ustensiles

    */

    parentListeIngredients.onclick = (event)=>{
// !== inégalité strite 
// La propriété currentTarget fait toujours référence à l'élément dont l'écouteur d'événement a déclenché l'événement, par opposition à la propriété target , qui renvoie l'élément qui a déclenché l'événement.  
          if(event.target !== event.currentTarget){
// récupération du texte de l'événement cible
              const ingredient = event.target.textContent;
// La méthode Element.remove() retire l'élément courant du DOM.
            //   event.target.remove();

              displayTag(ingredient, "Ingredients");

              oldValueArrayOfRecipes = [...arrayOfRecipes];

              arrayOfRecipes = filterIngredients(arrayOfRecipes,ingredient);

              displayRecipes(arrayOfRecipes) //même résultat en mettant displayRecipes(result) result est le même que celui en fin de la page searchFunctionnalProgramming.js

              listingAllKeywords(arrayOfRecipes);

              deleteTag();
          }
        
    };
  
    

    document.querySelector("#liste-appareils").onclick = (event)=>{
      
        if(event.target !== event.currentTarget){

            const appareil = event.target.textContent;

            displayTag(appareil, "Appareils");

        }
      
    };

    document.querySelector("#liste-ustensiles").onclick = (event)=>{
      
        if(event.target !== event.currentTarget){

            const ustensile = event.target.textContent;

            displayTag(ustensile, "Ustensiles");

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


    function deleteTag(){

        document.querySelector("#tags").onclick = (event)=>{

             if(event.target !== event.currentTarget){

                   if(event.target.className === "img_croix"){

                        const tag = event.target.parentNode;
                         
                        tag.remove();

                        displayRecipes(oldValueArrayOfRecipes);

                        return listingAllKeywords(oldValueArrayOfRecipes);

                   }

             }

        }

    }


    function getTheUserinput(){

         const allinputs = document.querySelectorAll(".filters-tags-area-input");
// le deuxième paramètre index va permettre à la fctio filterDetails de savoir sur quel tableau il doit aller chez les éléments

         allinputs.forEach((input, index)=>{

                input.addEventListener("input", ()=>{
                    // input.value permet de récupérer les caractères saisies dans l'input

                      const filteredArray = filterDetails(input.value, arrayOfAllElements[index]);

                      const inputNextSiblingUl = input.nextElementSibling;

                      displayDetails(filteredArray, inputNextSiblingUl);

                });

         });

    } 

    getTheUserinput();

    


}