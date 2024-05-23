import { connectApi, deleteProduct } from "./api.js";

const productsContainer = document.querySelector('.products-container');
const filterCategoryBtn = document.querySelectorAll('.category-btn');

export const toListProducts = async () => {
    const products = await connectApi();

    showProductsCards(products);
}

const showProductsCards = (productsList) => {
    productsContainer.innerHTML = '';

    for(let product of productsList) {
        const {id, name, price, image, category} = product;
        const productCard = `
            <div class="product-card">
                <div class="img-container">
                    <img src="${image}" alt="foto do produto ${name}" class="product-img">
                </div>
                <p class="product-title">${name}</p>
                <p class="product-category">${category}</p>
                <div class="card-values">
                    <p>R$ <span>${price}</span></p>
                    <button class="remove-btn" data-remove-btn id=${id}>
                        <img src="src/assets/icon/delete-icon.svg" alt="imagem de lixeira">
                    </button>
                </div>
            </div>
        `;
        productsContainer.innerHTML += productCard;
    }

    const removeBtns = document.querySelectorAll('[data-remove-btn]');

    removeBtns.forEach(btn => btn.addEventListener('click', () => removeProduct(btn)));
}

const removeProduct = async (btn) => {
    try {
        await deleteProduct(btn.id);

        alert('Produto Removido com Sucesso');
    } catch (error) {
        alert(error);
    };
}

const cleanActivesBtn = () => {
    filterCategoryBtn.forEach(btn => btn.classList.remove('active'));
};

const filterProducts = async (btn) => {
    cleanActivesBtn();
    btn.classList.add('active');

    const selectedCategory = btn.id;
    if(selectedCategory === 'todos') return toListProducts();

    const products = await connectApi();
    const filteredProducts = products.filter(product => product.category === selectedCategory);

    showProductsCards(filteredProducts);
}

filterCategoryBtn.forEach(btn => btn.addEventListener('click', () => filterProducts(btn)));
