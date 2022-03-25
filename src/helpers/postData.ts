import { Order } from "../types/typeApp";

const postData = async (order: Order) => {

    const fetchApi = await fetch('https://sheltered-meadow-49957.herokuapp.com/api/orders',{
        method: 'POST',
        body: JSON.stringify(order),
        headers:{
            'Content-type': 'application/json'
        }
    })

    return fetchApi;
}

export default postData;