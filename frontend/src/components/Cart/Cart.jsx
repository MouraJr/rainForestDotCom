import React from 'react';
import { Trash } from 'react-bootstrap-icons';
import { useCart } from 'react-use-cart';

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if (isEmpty) return <h1 className='text-center'>Your Cart is Empty</h1>

    return (
        <section className='p-4 container'>
            <div className='row justify-content-center align-content-center'>
                <div className='col-12 p-0'>
                    <h5>Cart ({totalUniqueItems}) total Items: ({totalItems}) </h5>
                    <table className='table table-light table-hover m-0'>
                        <tbody>
                            {items.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>
                                            <img className="align-self-center" src={item.image_url} alt={item.name} style={{ height: '6rem' }} />
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>Quantity ({item.quantity})</td>
                                        <td>
                                            <button className='btn btn-outline-danger ms-2 w-75 m-1' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                            <button className='btn btn-outline-danger ms-2 w-75 m-1' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                            <button className='btn btn-outline-danger ms-2 w-75 m-1' onClick={() => removeItem(item.id)}><Trash /></button>
                                        </td>
                                    </tr>)
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="bg-white">
                    <div className='col-auto ms-auto'>
                        <h2>Total Price: ${cartTotal.toFixed(2)}</h2>
                    </div>
                    <div className='col-auto'>
                        <button className='btn btn-outline-danger m-2' onClick={() => emptyCart()}> Clear Cart </button>
                    </div>
                    <button className='btn btn-secondary w-100 mb-3'>Buy Now</button>
                </div>
            </div>
        </section>
    );
};

export default Cart;