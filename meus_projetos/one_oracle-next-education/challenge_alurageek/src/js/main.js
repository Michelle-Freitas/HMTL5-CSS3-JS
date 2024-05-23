import './products.js';
import './form.js';
import { toListProducts } from './products.js';

const init = () => {
    toListProducts();
};

window.addEventListener('load', () => init());

