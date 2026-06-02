const data = {
    produtos: [
        {
            id: 1,
            nome: "iPhone 15",
            preco: 6999.90,
            categoria: "Celulares",
            imagem: "https://picsum.photos/300/200?1",
            descricao: "Smartphone Apple com câmera avançada.",
            emEstoque: true
        },
        {
            id: 2,
            nome: "Galaxy S24",
            preco: 5499.90,
            categoria: "Celulares",
            imagem: "https://picsum.photos/300/200?2",
            descricao: "Celular Samsung de última geração.",
            emEstoque: true
        },
        {
            id: 3,
            nome: "Notebook Dell",
            preco: 4200.00,
            categoria: "Notebooks",
            imagem: "https://picsum.photos/300/200?3",
            descricao: "Notebook ideal para estudos e trabalho.",
            emEstoque: false
        },
        {
            id: 4,
            nome: "MacBook Air",
            preco: 8999.90,
            categoria: "Notebooks",
            imagem: "https://picsum.photos/300/200?4",
            descricao: "Notebook Apple leve e poderoso.",
            emEstoque: true
        }
    ]
};

const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const btnRender = document.getElementById("btnRender");

function formatPrice(preco) {
    return preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function createProductCard(produto) {

    const card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">

        <h3>${produto.nome}</h3>

        <p>${formatPrice(produto.preco)}</p>

        <p>${produto.categoria}</p>

        <a
            class="btn-details"
            href="detalhes.html?id=${produto.id}">
            Ver detalhes
        </a>
    `;

    return card;
}

function renderProducts(produtos) {

    if (!productList) return;

    productList.innerHTML = "";

    produtos.forEach(produto => {

        productList.appendChild(
            createProductCard(produto)
        );

    });
}

function renderCategories() {

    if (!categorySelect) return;

    const categorias = [
        "Todas",
        ...new Set(
            data.produtos.map(
                produto => produto.categoria
            )
        )
    ];

    categorySelect.innerHTML = "";

    categorias.forEach(cat => {

        const option = document.createElement("option");

        option.value = cat;
        option.textContent = cat;

        categorySelect.appendChild(option);

    });
}

function filterProducts() {

    const texto = searchInput.value.toLowerCase();

    const categoria = categorySelect.value;

    return data.produtos.filter(produto => {

        const nomeValido =
            produto.nome
            .toLowerCase()
            .includes(texto);

        const categoriaValida =
            categoria === "Todas" ||
            produto.categoria === categoria;

        return nomeValido && categoriaValida;
    });
}

if (searchInput) {

    searchInput.addEventListener("input", () => {

        renderProducts(
            filterProducts()
        );

    });
}

if (categorySelect) {

    categorySelect.addEventListener("change", () => {

        renderProducts(
            filterProducts()
        );

    });
}

if (btnRender) {

    btnRender.addEventListener("click", () => {

        renderProducts(
            filterProducts()
        );

    });
}

renderCategories();
renderProducts(data.produtos);

const productDetails =
    document.getElementById("product-details");

if (productDetails) {

    const params =
        new URLSearchParams(
            window.location.search
        );

    const id =
        Number(
            params.get("id")
        );

    const produto =
        data.produtos.find(
            p => p.id === id
        );

    if (produto) {

        productDetails.innerHTML = `
            <h1>${produto.nome}</h1>

            <img
                src="${produto.imagem}"
                alt="${produto.nome}"
            >

            <p>
                <strong>Preço:</strong>
                ${formatPrice(produto.preco)}
            </p>

            <p>
                <strong>Categoria:</strong>
                ${produto.categoria}
            </p>

            <p>
                <strong>Disponibilidade:</strong>
                ${produto.emEstoque ? "Em estoque" : "Indisponível"}
            </p>

            <p>
                <strong>Descrição:</strong>
                ${produto.descricao}
            </p>

            <a href="index.html">
                Voltar para Home
            </a>
        `;
    }
}