// arrayForSearching : le tableau ds lequel on recherche
function filterDetails(userInput, arrayForSearching){
// uniformisation des caractères
    userInput = normalizeString(userInput);


    arrayForSearching = arrayForSearching.filter((element)=>{

         if(element.toLowerCase().includes(userInput) === true){

             return element;

         }

    });

   return arrayForSearching;
    

}