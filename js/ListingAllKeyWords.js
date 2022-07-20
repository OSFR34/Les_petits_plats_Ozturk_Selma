// RECUPERE LA LISTE DE TOUS LES INGREDIENTS

// contiendra ts les ingrédients y compris les doublons
const allIngredients = [];
// i pour itération tant que les objets que les objets (du tableau) sont inférieur à la longueur du tableau, puis à la fin d'une itération continuer en ajoutant 1.
for (let i=0; i<recipes.length; i++) {
// ds recipes on récupère l'index sur lequel on est, ainsi que l'élément ingredients qui est lui même un tableau ds le tableau recipes
    let ingredients = recipes [i].ingredients; 
// méthode map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant
    ingredients.map(({ingredient}) => {
        // La méthode .push() ajoute un ou plusieurs éléments à la fin d'un tableau et retourne la nouvelle taille du tableau.
        // La méthode .toLowerCase() remplace toutes les majuscules en minuscules.
        allIngredients.push(`${ingredient.toLowerCase()}`);
        
    });
}
const ingredientsNoDuplicates = new Set(allIngredients);


// RECUPERE LA LISTE DE TOUS LES APPAREILS

const allAppliances = [];
for (let i=0; i<recipes.length; i++) {
    let appliances = recipes [i].appliance;
    allAppliances.push(appliances);
}
const appliancesNoDuplicates = new Set(allAppliances);
// console.log(appliancesNoDuplicates);

// RECUPERE LA LISTE DE TOUS LES USTENSILES

const allUstensils = [];
for (let i=0; i<recipes.length; i++) {
    let ustensils = recipes [i].ustensils;
    allUstensils.push(ustensils);
};

const ustensilsNoDuplicates = new Set(allUstensils.flat());


for (const element of ustensilsNoDuplicates) {
    // console.log(element.toLowerCase());
}



function fillIngredients(ingredientsArray){

       return new Promise((resolve)=>{


            let html = "";

            ingredientsArray.forEach((ingredient)=>{
    
                html+= `
                
                        <span>${ingredient}</span>
                
                `;
    
            });
    
            document.querySelector("#summary-content-ingredients").innerHTML = html;


       });

}

function fillAppliances(appliancesArray){


    return new Promise((resolve)=>{


        let html = "";

        appliancesArray.forEach((appliance)=>{

            html+= `
            
                    <span>${appliance}</span>
            
            `;

        });

        document.querySelector("#summary-content-appliances").innerHTML = html;


   });

}

function fillUstensils(ustensilsArray){


    return new Promise((resolve)=>{


        let html = "";

        ustensilsArray.forEach((ustensil)=>{

            html+= `
            
                    <span>${ustensil}</span>
            
            `;

        });

        document.querySelector("#summary-content-ustensils").innerHTML = html;


   });

}


Promise.all([fillIngredients(ingredientsNoDuplicates), fillAppliances(appliancesNoDuplicates), fillUstensils(ustensilsNoDuplicates)]).then((result)=>{



});