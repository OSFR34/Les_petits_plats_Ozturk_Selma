function searchFunctionnalProgramming(userInput){

     return new Promise((resolve, reject)=>{

        userInput = normalizeString(userInput);


        function resultRecipesName(){
    
    
            return new Promise((resolve, reject)=>{
    
                const resultRecipesName = recipes.filter((recipe)=>{
    
        // toLowercase méthode qui converti une chaine en minuscule
        // ().includes : inclus) si les caractères saisis par l'utilisateur (=userInput) est inclu ds la tableau recipe.name = true 
                    if(recipe.name.toLowerCase().includes(userInput) === true){
            
                        return recipes;
            
                    }
    
                });
    
                return resolve(resultRecipesName);
                
            })
    
    
        }
    
        
        function resultRecipesIngredients(){
    
    
             return new Promise((resolve, reject)=>{
    
                const resultRecipesIngredients = recipes.filter((recipe)=>{
    
                    let isOnIngredients = false;
           
                    recipe.ingredients.forEach((recipeIngredient)=>{
           
                        if(recipeIngredient.ingredient.toLowerCase().includes(userInput) === true){
           
                               isOnIngredients = true;
           
                        }
           
                    });
           
                    if(isOnIngredients === true){
           
                           return recipe;
           
                    }
           
           
                });
    
                
                return resolve(resultRecipesIngredients);
    
             });
            
    
        }
    
    
        function resultRecipesDescription(){
    
    
              return new Promise((resolve, reject)=>{
    
                    const resultRecipesDescription = recipes.filter((recipe)=>{
    
                        if(recipe.description.toLocaleLowerCase().includes(userInput) === true){
                
                            return recipes;
                
                        }
                
                    });
    
                    return resolve(resultRecipesDescription);
    
    
              });
       
    
        }
    
      
    
    
       Promise.all([resultRecipesName(), resultRecipesIngredients(), resultRecipesDescription()]).then((result)=>{
        //  operateur spread permet en ajoutant ... devant un tableau ou une itération de récupérer ts les éléments d'un tableau
        // ci-dessous concaténation des ts les éléments des tableaux result dont l'index est 0 1 et 2.
                result = [...result[0], ...result[1], ...result[2]];
    
                if(result.length === 0){
    
                     return resolve(`Pas de recettes trouvée'`);
    
                }

                const jsonObject = result.map(JSON.stringify);
      
                const uniqueSet = new Set(jsonObject);

                result = Array.from(uniqueSet).map(JSON.parse);
      
                return resolve(result);
           
       });


     });


}