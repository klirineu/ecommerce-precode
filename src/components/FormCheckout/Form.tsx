import { FormEvent, useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CartContext } from "../../context/CartContext";
import postData from "../../helpers/postData";
import useForm from "../../hooks/useForm";
import { Customer, Order } from "../../types/typeApp";

const initialState = {
    name: '',
    lastName: '',
    email: '',
    address: ''
}

const notify = (msj: string) => toast(msj);

const Form = () => {
    
    const {cartItems, dispatch } = useContext(CartContext);
    const {name, email, lastName, address, handleInputChange, resetValues } = useForm<Customer>(initialState);
    const [showToast, setShowToast ] = useState(false);
    
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        setShowToast(true);

        const orderDetails = cartItems.map(({id, ...item}) => item);

        if(orderDetails.length > 0){
            
            const order: Order = {
                customer: {
                    name, email, lastName, address
                },
                order_details: orderDetails
            }
            
            const fetchApi = await postData(order);
            
            if(!fetchApi.ok){
                notify('Não foi possível processar o pedido... Por favor, tente novamente');
            }else{
                notify('Pedido feito com sucesso');

                resetValues();

                dispatch({
                    payload: [],
                    type: 'CLEAR'
                });
                
            }
        }else {
            notify('Um pedido sem produtos não pode ser processado');
        }
        
        setTimeout(() => setShowToast(false),5000);
    }
    
    
    return (
        <div className='col-md-7 col-lg-8'>
            <h4 className='mb-3'>Checkout</h4>
            <form autoComplete='off' onSubmit={ handleSubmit }>
                <div className="row g-3">
                    <div className="col-sm-6">
                        <label htmlFor="name" className='form-label'>Nome</label>
                        <input type="text" className='form-control' name='name' id='name' placeholder='Nome..' value={name} onChange={handleInputChange}/>
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="lastName" className='form-label'>Sobrenomes</label>
                        <input type="text" className='form-control' name='lastName' id='lastName' placeholder='Sobrenomes..' value={lastName} onChange={handleInputChange}/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="email" className='form-label'>Email</label>
                        <input type="email" className='form-control' name='email' id='email' placeholder='Email..' value={email} onChange={handleInputChange}/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="address" className='form-label'>Endereço</label>
                        <input type="text" className='form-control' name='address' id='address' placeholder='Endereço..' value={address} onChange={handleInputChange}/>
                    </div>
                </div>
                <br />
                <button className='w-100 btn btn-primary' type='submit'>Processar pagamento</button>
                {
                    showToast && <Toaster 
                        toastOptions={{
                            position: 'top-right',
                            duration: 2000,
                        }}/>
                }
            </form>
        </div>
    )
}

export default Form;
