// http://localhost:3000/products

export const connectApi = async () => {
    const connection = await fetch('http://localhost:3000/products');
    const convertedConnection = await connection.json();
    return convertedConnection;
};

export const registerNewProduct = async (newProduct) => {
    const {name, price, image, category} = newProduct;

    const connection = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            name,
            price,
            image,
            category
        })
    });

    if(!connection.ok) throw new Error("Não foi possível cadastrar o novo produto")

    const convertedConnection = await connection.json();
    return convertedConnection;
}

export const deleteProduct = async (id) => {
    const connection = await fetch(`http://localhost:3000/products/${id}`, {
        method: 'DELETE'
    });
}
