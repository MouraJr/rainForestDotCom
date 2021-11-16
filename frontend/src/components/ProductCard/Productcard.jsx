import React from 'react';
import { useCart } from 'react-use-cart'

const Productcard = (props) => {
    const { addItem } = useCart();

    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div class="card p-0 overflow-hidden h-100 shadow">
                <img src={props.img} alt={props.title} class="card-img-top img-fluid" />
                <div class="card-body text-center">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.description}</p>
                    <p class="card-text">${props.price}</p>
                    <button class="btn btn-success" onClick={() => addItem(props.item)}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Productcard;