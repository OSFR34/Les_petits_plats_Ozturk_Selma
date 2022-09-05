// avant d'éxécuter le code JS, on s'assure que le dom est chargé

document.addEventListener("DOMContentLoaded", ()=>{

    displayRecipes(recipes);

    listingAllKeywords(recipes);

    const userInput = document.querySelector("#search");


// Récupération de l'input
    userInput.addEventListener("input", function(){
     
           if(this.value.length < 3 && this.value.length > 0){

                 return false;

           }

           if(this.value.length === 0){

                displayRecipes(recipes);

                return listingAllKeywords(recipes);

           }

       
           imperativeSearchProgramming(this.value).then((response)=>{

            if(response === "Pas de recettes trouvées"){
                const resultMessage = `<p id="message_no_recipes">Aucune recette ne correspond à votre critère…    Vous pouvez
                chercher "tarte aux pommes", "poisson", etc.
                </p>`;
                return displayNoRecipes(resultMessage);
            }

               displayRecipes(response) 

               listingAllKeywords(response);

           });
    });    
});