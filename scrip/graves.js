const PIEDRA = "piedra";
const PAPEL = "papel";
const TIJERAS = "tijeras";

const empate = 0;
const ganar = 1;
const perder = 2;

const piedraBtn = document.getElementById("piedra");
const papelBtn = document.getElementById("papel");
const tijerasBtn = document.getElementById("tijeras");

const invocadorImg = document.getElementById("invocador-img");
const gravesImg = document.getElementById("graves-img");



piedraBtn.addEventListener("click", ()=>{
console.log("piedra");
    play(PIEDRA);

});
papelBtn.addEventListener("click", ()=>{
    play(PAPEL);

});
tijerasBtn.addEventListener("click", ()=>{
    play(TIJERAS);

});

function play(opcionInvocador){
    const playGRaves = calGraves();
   
    const resultado = calResultado(opcionInvocador, playGRaves);

    invocadorImg.src = "fotos/ppt"+ opcionInvocador +".jpg";
    gravesImg.src = "fotos/ppt"+ playGRaves +".jpg";

    switch (resultado) {
        case empate:
            
            alert("Has empatado");
            break;
    
        case ganar:
            
            alert("Has ganado tu pista es: esconde");
            break;
        case perder:
           
            alert("Has perdido");
            break;
    }
}

function calGraves(){
    const number = Math.floor(Math.random() * 3);

    switch (number){
        case 0:
            return PIEDRA;
        case 1:
            return PAPEL;
        case 2:
            return TIJERAS;
    }

}


function calResultado(opcionInvocador, playGRaves){
     if (opcionInvocador === playGRaves){
        return empate;

    }else if (opcionInvocador === PIEDRA){

        if (playGRaves === PAPEL) return perder;
        if (playGRaves === TIJERAS) return ganar;

    }else if (opcionInvocador === PAPEL){
        
        if (playGRaves === TIJERAS) return perder;
        if (playGRaves === PIEDRA) return ganar;

    }else if (opcionInvocador === TIJERAS){
        
        if (playGRaves === PIEDRA) return perder;
        if (playGRaves === PAPEL) return ganar;
    }
}