const pu= parseFloat(prompt("entrez un prix"))
const qtecom=parseInt(prompt("entrez un nombre de commande"));
//calcul du total
tot =(pu*qtecom)
document.write("le total est de"+tot+"euros"+"<br><br>")
//calcul de la remise
if (tot<=100 )
{
    rem=0
}
else if ((tot>=100) &&(tot<=200) ){
    rem=0.05
}
else if (tot>200 ){
    rem=0.1
}
totrem=tot-(tot*rem)
document.write("total remisé est de"+" "+totrem+"<br><br>")
//calcul du frais de port
 port=0
if(totrem>500)
{
    port=0
}
else if (totrem<500)
{
    if(port>6)
    {port=(totrem*0.02)}
    else(port<6)
    {port=6}   
}
document.write("total de la comande"+"<br>"+"(total+remise) "+totrem+" euros<br>"+"plus les frais de port de "+port+" est de "+(port+totrem)+"euros")
