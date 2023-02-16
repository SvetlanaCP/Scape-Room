const invocadorOpcion = document.getElementById("invocadorOpcion");
const jaxOpcion = document.getElementById("jaxOpcion");

function Empezar(){
   
    

    const jaxRandomNum = Math.floor(Math.random()* 2) + 4;

    const jaxDiceImagen = 'fotos/dice' + jaxRandomNum + '.png';

   
   document.getElementById("jaxDiceImagen");


    const invocadorRandomNum = Math.floor(Math.random()* 6) + 1;

    const invocadorDiceImagen = 'fotos/dice' + invocadorRandomNum + '.png';
    document.getElementById("invocadorDiceImagen");


    if (invocadorRandomNum > jaxRandomNum) {
        ('h1').innerHTML = 'Has ganado toma tu pista: ';
        alert('Has ganado toma tu pista: sorpresas ')

    } else if (invocadorRandomNum < jaxRandomNum) {
        ('h1').innerHTML = 'Sigue intentandolo';
        alert('Sigue intentandolo')

    } else if (invocadorRandomNum == jaxRandomNum) {
        ('h1').innerHTML = 'Sigue intentandolo';
        alert('Sigue intentandolo')
    }

    
}