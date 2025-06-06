let valorTotal = 0;
let contador = 0;
limpaCampos();




function adicionar(){
let produtoAdicionado = document.getElementById('produto').value;
let nomeProduto = produtoAdicionado.split('-')[0];
let valorProduto = produtoAdicionado.split('R$')[1];
let quantidade = document.getElementById('quantidade').value;

let valorTotalProduto = quantidade*valorProduto;

if(quantidade== ""){
    alert('Campo quantidade não pode ficar vazio');
        return;
}else{
let listaCarrinho = document.getElementById('lista-produtos');
listaCarrinho.innerHTML= listaCarrinho.innerHTML + ` <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorTotalProduto}</span>
        </section>`;
}

valorTotal += valorTotalProduto;

let totalAparente = document.getElementById('valor-total');
    totalAparente.innerHTML = `<span class="texto-azul" id="valor-total">R$${valorTotal}</span>`;

document.getElementById('quantidade').value='';

contador++;

let corrige = contador == 1 ? 'item' : 'itens' ;
let corrigeDois = contador == 1 ? 'adicionado' : 'adicionados';

alteraTitulo(`(${contador}) ${corrige} ${corrigeDois}`);

}

function limpaCampos(){
    let listaLimpa = document.getElementById('lista-produtos').innerHTML='';
    let carrinhoLimpo = document.getElementById('valor-total').innerHTML='<span class="texto-azul" id="valor-total">R$0</span>';
}

    function limpar() {
    limpaCampos();
    alteraTitulo ('Carrinho de compras');
}


function alteraTitulo (frase){
    
    let titulo = document.querySelector('title');
titulo.innerHTML = frase;

}
