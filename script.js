// Seleciona o primeiro elemento com a classe 'manual-btn' e armazena na variável 'radio'
// (Esta linha não é utilizada no restante do código, mas está aí para referência futura)
const radio = document.querySelector('.manual-btn');

// Define a variável 'cont' como uma variável mutável (let) e a inicializa com o valor 1
let cont = 1;

// Marca o primeiro input radio como selecionado (checked = true)
document.getElementById('radio1').checked = true;

// Configura um intervalo para executar a função 'proximaImg' a cada 1000 milissegundos (1 segundo)
setInterval(() => {
    proximaImg(); // Chama a função para avançar para a próxima imagem
}, 5000);

// Função que avança para a próxima imagem, marcando o próximo input radio
function proximaImg() {
    // Incrementa a variável 'cont' para avançar para o próximo input radio
    cont++;

    // Se 'cont' for maior que 3, redefine 'cont' para 1
    // Isso cria um loop, voltando ao primeiro input após o terceiro
    if (cont > 3) {
        cont = 1;
    }

    // Marca o input radio correspondente ao valor atual de 'cont' como selecionado (checked = true)
    document.getElementById('radio' + cont).checked = true;
}




// Adiciona um evento de escuta para o evento de rolagem da janela (scroll)
window.addEventListener("scroll", function(){
    // Seleciona o elemento com a classe 'header-container'
    let header = document.querySelector('.header-container')
    
    // Adiciona ou remove a classe 'rolagem' ao elemento 'header' baseado na posição de rolagem vertical (scrollY) da janela
    // Se a rolagem vertical for maior que 100 pixels, a classe 'rolagem' será adicionada ao 'header'
    // Se a rolagem vertical for menor ou igual a 100 pixels, a classe 'rolagem' será removida do 'header'
    header.classList.toggle('rolagem', window.scrollY > 10)
   
})

//Menu hambuguer 


// Obtém o elemento do botão móvel pelo seu ID e o armazena na variável btnMobile
const btnMobile = document.getElementById('btn-mobile')

// Define a função toggleMenu que será chamada quando o botão móvel for clicado ou tocado
function toggleMenu(event) {
    // Verifica se o evento é um 'touchstart' e previne o comportamento padrão
    if(event.type === 'touchstart') event.preventDefault()
    
    // Obtém o elemento de navegação pelo seu ID e o armazena na variável nav
    const nav = document.getElementById('nav')
    // Alterna a classe 'active' no elemento de navegação, adicionando-a se não estiver presente e removendo-a se estiver
    nav.classList.toggle('active')
    
    // Obtém o elemento do cabeçalho pelo seu ID e o armazena na variável headerMobile
    const headerMobile = document.getElementById('header')
    // Alterna a classe 'active-header' no elemento do cabeçalho, adicionando-a se não estiver presente e removendo-a se estiver
    headerMobile.classList.toggle('active-header')
}

// Adiciona um ouvinte de evento de clique ao botão móvel, que chama a função toggleMenu quando o botão é clicado
btnMobile.addEventListener('click', toggleMenu)

// Adiciona um ouvinte de evento de toque ao botão móvel, que chama a função toggleMenu quando o botão é tocado
btnMobile.addEventListener('touchstart', toggleMenu)

