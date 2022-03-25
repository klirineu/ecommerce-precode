
// import { faMinus, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faMinus, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { CartContext } from '../../../context/CartContext';
import { CartItem } from '../../../types/typeApp';
import './styles.css';

type Props = {
    item: CartItem
}

const faMinusProp = faMinus as IconProp
const faPlusProp = faPlus as IconProp
const faTrashAltProp = faTrashAlt as IconProp


const Item = ({ item }: Props) => {

    const { dispatch } = useContext(CartContext);

    return (
        <>
            <div className='shopping-cart-item'>
                <div className="item-action">
                    <Button 
                        variant='secondary'
                        onClick={() => dispatch({
                            payload: item,
                            type: 'ADD'
                        })}>
                        <FontAwesomeIcon icon={faMinusProp} color='white'/>
                    </Button>
                    <span>{item.amount}</span>
                    <Button 
                        variant='secondary'
                        onClick={() => dispatch({
                            payload: item.id,
                            type: 'REMOVE'
                        })}>
                        <FontAwesomeIcon icon={faPlusProp} color='white'/>
                    </Button>
                </div>
                <div className="item-detail">
                    <div className="item-detail-image">
                        <img src={item.attributes.link_image} alt={item.attributes.title} />
                    </div>
                    <div className="item-detail-info">
                        <div className="item-detail-info-name">
                            {item.attributes.title}
                        </div>
                        <div className="item-detail-info-prices">
                            <span>R${item.attributes.price}</span>
                        </div>
                    </div>
                </div>
                <div className="item-action-remove">
                    <Button
                        variant='danger'
                        title='Retir producto'
                        onClick={() => dispatch({
                            payload: item.id,
                            type: 'REMOVE-ALL'
                        })}>
                        <FontAwesomeIcon icon={faTrashAltProp} color='white'/>
                    </Button>
                </div>
            </div>   
        </>
    )
}

export default Item;
