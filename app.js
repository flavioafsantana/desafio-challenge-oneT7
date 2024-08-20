const textArea = document.querySelector('.text-area');
const mensagem = document.querySelector('.campoSaida__texto');
const mensagemSaida = document.querySelector('.campoSaida__conteudo');


let texto 
function criptografar(texto) {
    texto = document.querySelector('.text-area').value;
    texto = texto.toLowerCase();
    let textoCriptografado = '';
    for (let i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case 'a':
                textoCriptografado += 'ai';
                break;
            case 'e':
                textoCriptografado += 'enter';
                break;
            case 'i':
                textoCriptografado += 'imes';
                break;
            case 'o':
                textoCriptografado += 'ober';
                break;
            case 'u':
                textoCriptografado += 'ufat';
                break;
            default:
                textoCriptografado += texto[i];
        }
    }
    mensagem.innerHTML = textoCriptografado;
    mensagemSaida.style.display = 'none';
    textArea.value = '';
}

function descriptografar() {
    texto = document.querySelector('.text-area').value;
    texto = texto.toLowerCase();
    let textoDescriptografado = texto;

    if (texto.includes('ai')) {
        textoDescriptografado = textoDescriptografado.replace(/ai/g, 'a');
    }
    if (texto.includes('enter')) {
        textoDescriptografado = textoDescriptografado.replace(/enter/g, 'e');
    }
    if (texto.includes('imes')) {
        textoDescriptografado = textoDescriptografado.replace(/imes/g, 'i');
    }
    if (texto.includes('ober')) {
        textoDescriptografado = textoDescriptografado.replace(/ober/g, 'o');
    }
    if (texto.includes('ufat')) {
        textoDescriptografado = textoDescriptografado.replace(/ufat/g, 'u');
    }
    mensagem.innerHTML = textoDescriptografado;
    mensagemSaida.style.display = 'none';
    textArea.value = '';
}

function copiar() {
    navigator.clipboard.writeText(mensagem.innerHTML);
    mensagemSaida.style.display = 'flex';
    mensagem.innerHTML = '';
}
    

