import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartItems } from '../../../_actions/user_actions';

function CartPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    let cartItems = [];

    // 리덕스 User state안에 cart 안에 상품이 들어있는지 확인
    if (user.userData && user.userData.cart) {
      if (user.userData.cart.length > 0) {
        user.userData.cart.forEach((item) => {
          cartItems.push(item.id);
        });

        dispatch(getCartItems(cartItems, user.userData.cart));
      }
    }
  }, [user.userData]);
  return <div>CartPage</div>;
}

export default CartPage;
