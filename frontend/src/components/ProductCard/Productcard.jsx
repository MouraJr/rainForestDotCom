import React from 'react';
import { useCart } from 'react-use-cart'

const Productcard = (props) => {
    const { addItem } = useCart();

    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={props.img} alt={props.title} className="card-img-top" />
                <div className="card-body text-center">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text">${props.price}</p>
                    <button className="btn btn-secondary" onClick={() => addItem(props.item)}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Productcard;