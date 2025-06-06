let valorTotal = 0
limpaCampos()

function limpaCampos(){
let listaLimpa = document.getElementById('lista-produtos').innerHTML='';
let carrinhoLimpo = document.getElementById('valor-total').innerHTML='<span class="texto-azul" id="valor-total">R$0</span>';

}

function adicionar(){
let produtoAdicionado = document.getElementById('produto').value
let nomeProduto = produtoAdicionado.split('-')[0];
let valorProduto = produtoAdicionado.split('R$')[1];
let quantidade = document.getElementById('quantidade').value;

let valorTotalProduto = quantidade*valorProduto;

if(quantidade== ""){
    alert('Campo quantidade não pode ficar vazio')
        return
}else{
let listaCarrinho = document.getElementById('lista-produtos');
listaCarrinho.innerHTML= listaCarrinho.innerHTML + ` <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorTotalProduto}</span>
        </section>`
}

valorTotal += valorTotalProduto;

let totalAparente = document.getElementById('valor-total')
    totalAparente.innerHTML = `<span class="texto-azul" id="valor-total">R$${valorTotal}</span>`

document.getElementById('quantidade').value=''

    }
    

    function limpar() {
   limpaCampos()
    }
