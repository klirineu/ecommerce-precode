const getProducts = async () => {
    const response = await fetch('https://sheltered-meadow-49957.herokuapp.com/api/products');
    const data = await response.json();
    console.log(data)
    return data.data;
}

export default getProducts;