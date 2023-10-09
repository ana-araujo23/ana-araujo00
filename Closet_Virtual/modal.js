
// Menu Bar

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open')
    }
}

// Upload Preview

const inputFile = document.querySelector('#pictureInput');
const pictureImage = document.querySelector('.pictureImage');
const pictureImageTxt = "Escolha um arquivo";
pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener('change', function (e) {
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function (e) {
            const readerTarget = e.target;

            const img = document.createElement('img');
            img.src = readerTarget.result;
            img.classList.add('picture_img');

            pictureImage.appendChild(img);
        });

        reader.readAsDataURL(file);
    } else {
        pictureImage.innerHTML = pictureImageTxt;
    }
})


// Modal PopUp

function iniciaModal(modalID) {
    const modal = document.getElementById(modalID);
    if (modal) {
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) => {
            if (e.target.id === modalID || e.target.id === 'fecharPop') {
                modal.classList.remove('mostrar');
            }
        });
    }
}

function teste() {
    iniciaModal('modaljs')
}


// Cadastrar Produto

const botaao = document.querySelector(".cadastrarPd");
let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
const cards = document.getElementsByClassName('cards')
const formulario = document.getElementsByClassName('formulario')

function exibirProdutos() {
    let containerProdutos = document.getElementById('containerProdutos');
    for (const [index, produto] of produtos.entries()) {
        const novoCard = document.createElement('div');
        novoCard.classList.add('cardPd');
        novoCard.setAttribute('data-index', index); // Define o índice do produto
        novoCard.innerHTML = `
         <div class='cardPd'>
            <div class='img'>
                <img src='${produto.pictureInput}' alt='Imagem do Produto'/>
            </div>
            <div class="content">
                <h3 class="nomeProduto">${produto.nomeProd}</h3>
                <div class="price">R$${produto.precoProd}</div>
            </div>
            <button class="carro" onclick="adicionarAoCarrinho(${produtos.indexOf(produto)})"><img src="/image/carrinho.png" alt=""></button>
            <button class="lixo" onclick="excluirProduto(this, ${index})"><img src="/image/cesto-de-lixo.png" alt=""></button>
     </div>`;
    
     containerProdutos.appendChild(novoCard);
    }
}

function excluirProduto(element, index) {
    produtos.splice(index, 1); // Remove o produto no índice especificado
    localStorage.setItem('produtos', JSON.stringify(produtos)); // Atualiza o armazenamento local
    element.remove(); // Remove o card HTML
    location.reload();
}


exibirProdutos();

function saveProduct() {
    const nomeProd = document.getElementById('nomeProd').value;
    const precoProd = parseFloat(document.getElementById('precoProd').value);
    const pictureInput = document.getElementById('pictureInput');
    const pictureFileName = pictureInput.files[0].name;

    const novoProduto = { nomeProd, precoProd, pictureInput: pictureFileName };

    produtos.push(novoProduto);
    localStorage.setItem('produtos', JSON.stringify(produtos));
}

adicionarAoCarrinho(novoProduto);

function excluirDiv() {
    // Selecione a div que você deseja excluir
    const caard = document.querySelector('.cardPd');

    // Verifique se a div existe
    if (caard) {
        // Use o método remove() para excluir a div
        caard.remove();
    }
}

// Chame a função quando quiser excluir a div, por exemplo, em resposta a um evento de clique em um botão
const botaoExcluir = document.querySelector('.lixo');
botaoExcluir.addEventListener('click', excluirDiv);


// Carrinho de Compras
const carrinho = [];
const listaProdutos = document.querySelector(".listaProdutos");
const totalElement = document.querySelector(".total");

function adicionarAoCarrinho(produto) {
    carrinho.push(produto);
    atualizarCarrinho();
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    listaProdutos.innerHTML = "";
    let total = 0;

    carrinho.forEach((produto, index) => {
        listaProdutos.innerHTML += `
            <li>
                ${produto.nomeProd} - R$${produto.precoProd}
                <button onclick="removerDoCarrinho(${index})">Remover</button>
            </li>
        `;
        total += produto.precoProd;
    });

    totalElement.textContent = `R$ ${total.toFixed(2)}`;
}

const carrinhoCompras = document.querySelector('.carrinhoCompras')
const sacolaIcon = document.getElementById('abrirCart');
const fecharCarrinhoBtn = document.querySelector('.fecharCarrinho');

sacolaIcon.addEventListener('click', () => {
    carrinhoCompras.classList.toggle('mostrarCarrinho');
});

fecharCarrinhoBtn.addEventListener('click', () => {
    carrinhoCompras.classList.remove('mostrarCarrinho');
});



