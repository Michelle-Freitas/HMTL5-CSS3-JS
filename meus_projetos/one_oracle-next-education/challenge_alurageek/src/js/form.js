import { registerNewProduct } from "./api.js";

const formFields = document.querySelectorAll('[required]');

const submitBtn = document.querySelector('.submit-btn');

const cleanBtn = document.querySelector('.clean-form-btn');

const verifyFieldsWasFulfilled = () => {
    if(formFields[0].checkValidity() && formFields[1].checkValidity() && formFields[2].checkValidity() && formFields[3].checkValidity()){
        submitBtn.disabled = false;
    };
};

formFields.forEach(field => {
    field.addEventListener('focusout', () => verifyFieldsLength(field));
});

const verifyFieldsLength = (field) => {
    verifyFieldsWasFulfilled();
    const fieldName = field.name
    const message = document.querySelector(`[data-msg-${fieldName}`);
    message.innerHTML = '';

    const minSize = {
        name: 15,
        price: 2,
        image: 15
    };

    if(field.value.length < minSize[fieldName]){
        const messages = {
            name: `Por favor preencha o nome com no mínimo ${minSize.name} digitos`,
            price: `Por favor preencha o preço com no mínimo ${minSize.price} digitos`,
            image: `Por favor preencha a url com no mínimo ${minSize.image} digitos`,
        };
        message.innerHTML = messages[fieldName];
    }

    if(!field.value) {
        const messages = {
            name: 'Por favor preencha o nome do produto',
            price: 'Por favor preencha o preço do produto',
            image: 'Por favor preencha a url da imagem do produto',
            category: 'Escolha uma categoria',
        };
        message.innerHTML = messages[fieldName];
    }

    const regexPrice = /\d{2,3}\,?.?\d{2}/gm;
    const ok = regexPrice.exec(formFields[1].value);

    if(fieldName === 'price' && !ok) {
        message.innerHTML = 'Por favor preencha no formato 00,00';
    };
}



const submitForm = async (e) => {
    e.preventDefault();

    const newProduct = {
        name: formFields[0].value,
        price: (formFields[1].value).toString().replace('.', ','),
        image: formFields[2].value,
        category: formFields[3].value
    };

    try {
        await registerNewProduct(newProduct);

        alert('Produto Cadastrado com Sucesso');
    } catch (error) {
        alert(error);
    };

};

submitBtn.addEventListener('click', (e) => submitForm(e))

const cleanForm = () => {
    submitBtn.disabled = true;
    formFields.forEach(field => {
        field.value = '';
    });
};

cleanBtn.addEventListener('click', () => cleanForm());
