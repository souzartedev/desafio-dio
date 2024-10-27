

function fabricacao_pao(){
    preparar_pao ()
    pao_torrado ()
    pao_finalizado ()
}



function preparar_pao(){
    console.log("Preparando pão para torrar");
}

function pao_torrado(){
    console.log("Pão sendo torrado");
}

function pao_finalizado(){
    console.log("Ejetar pão!");
}

fabricacao_pao()
