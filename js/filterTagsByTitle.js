// affichage des mots selon un tri par ordre alphabétique.
function filterByTitle(arrayOfElements){
    return arrayOfElements.sort((a, b)=>{
         return a.localeCompare(b);
    });
}