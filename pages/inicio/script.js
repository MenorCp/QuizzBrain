//[primeiro] se foi marcado [segundo] qual opção
var selectedOption = [0, 0];
var acertos = [0, 0];

function selectOption(option ,question){
    const selection = document.getElementById(option);
    if(selectedOption[0] === 0 && selectedOption[1] === 0){
        selectedOption = [1, parseInt(question)];
        selection.className = 'option-select-on';
    }
    else if(parseInt(question) === selectedOption[1]){
        selectedOption = [0, 0];
        selection.className = 'option-select-off';
    }
}


function resposta(pergunta){
    const hits = document.getElementById('acert');
    const buttonResp = document.getElementById('buttonResp');
    if(pergunta === 1 && acertos[1] != pergunta){
        if(selectedOption[1] === 3){
            acertos[0]++;
            acertos[1] = pergunta;
            buttonResp.style.backgroundColor = 'green';
        }else{
            buttonResp.style.backgroundColor = 'red';
        }
    }
    hits.innerText = "Acertos: " + acertos[0];
}