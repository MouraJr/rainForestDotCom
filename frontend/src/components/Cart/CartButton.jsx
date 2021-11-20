import React from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useCart } from 'react-use-cart';

import './CartButton.css'

export default function CartButton(props) {

  const {
    totalItems,
  } = useCart();

  return (
    <div className='cart-icon'>
      <Badge color="secondary">
        <ShoppingCartIcon />{totalItems}
      </Badge>
    </div>
  );
}