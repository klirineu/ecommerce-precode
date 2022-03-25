import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { calculateTotal, getTotalItems } from '../../helpers/calculate';

const OrderSummary = () => {

    const { cartItems } = useContext(CartContext);

    return (
        <div className='col-md-5 col-lg-4 order-md-last'>
            <h4 className='d-flex justify-content-between align-items-center mb-3'>
                <span className='text-primary'>Resumo de compra</span>
                <span className='badge bg-primary rounded-pill'>{getTotalItems(cartItems)}</span>
            </h4>
            <ul className='list-group mb-3'>
                {
                    cartItems.map(item => (
                        <li
                            key={item.id}
                            className='list-group-item d-flex justify-content-between lh-sm'>
                            <div>
                                <h6 className='my-0'>{ item.attributes.title }</h6>
                                <small className='text-muted'>Quantidade: { item.amount }</small>
                            </div>       
                            <div className="text-muted">R${item.attributes.price}</div>  
                        </li>
                    ))
                }
                <li className='list-group-item d-flex justify-content-between'>
                    <span>TOTAL (R$)</span>
                    <strong>R${ calculateTotal(cartItems).toFixed(2)}</strong>
                </li>
            </ul>
        </div>
    )
}

export default OrderSummary;
