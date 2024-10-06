// Pegando a class para fazer o pedido
const Pedido = document.getElementsByClassName(".but");
// peças faz o chamado para o bolo de pote 
const buto = document.getElementsByClassName(".buto");

//funçao que faz o pedido no bolo de pote 
function peças(buto) {
    chama();
}


//Funçao de faezr o pedido
function peça(Pedido) {


    Mostra();
    
}

function Mostra() {
    const ress = document.getElementById("resultadoo");
    const res = document.getElementById("resultado");
    const Dados = document.getElementById("Dados").value;
   

    // valor do produto
    const valordoproduto = 14;
    // juntando os dois valores
    const valores = valordoproduto * Dados;
    ress.innerHTML= `
        <div id ="resultado">
            R$ ${valores},00
        </div>



        <div id="confirma" onclick+"confirma()">
            <button>
                <a href="https://wa.me/5511983728703?text=Olá,%20gostaria%20de%20Pedir%20a%20Quantidade(s)%20de%20${Dados}%20Bolo(s)%20Caseiro(s),%20com%20o%20Valor%20de%20R$${valores},00">Confirme !!!</a>
            </button>
        </div>
        `
   
    
}

function chama() {
     //valor do bolo de pote
    const Dadoss = document.getElementById("Dadoss").value;
    //mostra o resultado
    const resss = document.getElementById("resultadooo");
    // valor do bilo de pote
    const Valor_do_pote = 12;
    //junçao dos valores 
    const junçao = Valor_do_pote * Dadoss;

    
    
    resss.innerHTML=`
         <div id ="resultadoooo">
            R$ ${junçao},00
        </div>



        <div id="confi" onclick+"">
            <button>
            <a href="https://wa.me/5511983728703?text=Olá,%20gostaria%20de%20Pedir%20a%20Quantidade(s)%20de%20${Dadoss}%20Bolo(s)%20Caseiro(s),%20com%20o%20Valor%20de%20R$${junçao},00">Confirme !!!</a>
            </button>
        `
    }





//nav bar
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}
