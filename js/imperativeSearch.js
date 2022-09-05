function imperativeSearchProgramming(userInput){

    return new Promise((resolve, reject)=> {
         
        userInput = normalizeString(userInput);

        function resultRecipesName(){

            const recipesName = [];

            return new Promise((resolve, reject)=>{

                const j = recipes.length;

                for(let i=0; i<j; i++){

                    if(recipes[i].name.toLowerCase().includes(userInput) === true) {
                      

                        recipesName.push(recipes[i]);

                    }

                }
    
                return resolve(recipesName);
                
            });
        }
        
        function resultRecipesIngredients(){

            return new Promise((resolve, reject)=>{

                const resultIngredients = [];

                const j = recipes.length;

                for(let i=0; i<j; i++){


                    let isOnIngredients = false;

                    const l = recipes[i].ingredients.length;

                    for(let k=0; k<l; k++){

                          if(recipes[i].ingredients[k].ingredient.toLowerCase().includes(userInput) === true){

                              isOnIngredients = true;

                          }

                    }

                    if(isOnIngredients === true){
                                
                         resultIngredients.push(recipes[i]);
        
                    }

                  

                }

                return resolve(resultIngredients);

            });
            
        }

        function resultRecipesDescription(){

            return new Promise((resolve, reject)=>{

                const recipesDescription = [];

                const j = recipes.length;

                for(let i=0; i<j; i++){

                    if(recipes[i].description.toLocaleLowerCase().includes(userInput) === true){

                            recipesDescription.push(recipes[i]);

                    }
                }

                return resolve(recipesDescription);
            
            });
        }

        Promise.all([resultRecipesName(), resultRecipesIngredients(),resultRecipesDescription()]).then((result)=>{
          
                result = [...result[0], ...result[1], ...result[2]];
    
                if(result.length === 0){
    
                        return resolve('Pas de recettes trouvées');
    
                }

                const jsonObject = result.map(JSON.stringify);
        
                const uniqueSet = new Set(jsonObject);

                result = Array.from(uniqueSet).map(JSON.parse);
        
                return resolve(result);
            
        });
    
    
    });
}