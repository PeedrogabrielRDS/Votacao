let pSonic = document.getElementById('sonicVotos')
let acumuladorSonic = parseInt(pSonic.textContent)

function placarSonic(){
    acumuladorSonic++
    pSonic.innerHTML = acumuladorSonic
}

document.getElementById('btnSonic').addEventListener('click', placarSonic)

let pMario = document.getElementById('marioVotos')
let acumuladorMario = parseInt(pMario.textContent)

function placarMario(){
    acumuladorMario++
    pMario.innerHTML = acumuladorMario
}

document.getElementById('btnMario').addEventListener('click', placarMario)

// ---------------------------------------------------------------------------

function decidirVencedor(){
    let resultado = document.getElementById('resultado')

    if (acumuladorSonic > acumuladorMario){
        resultado.innerHTML = `Sonic foi o vencedor da votação com ${acumuladorSonic} votos.`
    }else{
        resultado.innerHTML = `Mario foi o vencedor da votação com ${acumuladorMario} votos.`
    }
}

document.getElementById('btnResultado').addEventListener('click', decidirVencedor)