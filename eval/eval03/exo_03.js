

let table = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];


let trouve = true;

while (trouve==true){
let Prenom=prompt("devinez le prénom")
let index=table.indexOf(Prenom)
    if (index !== -1){
        for (i=index ;i <table.length -1;i++)
        {
            table[i]=table[i+1]  
            table[table.length-1]="";
        
        }   
        
            document.write("bravo!!"+Prenom+" a été trouvé "+"<br>")
            
    }
            
    else 
    {
         alert("ERREUR ce "+Prenom+" n'existe pas dans le tableau."+(!trouve))
         
         break;
    }
}




