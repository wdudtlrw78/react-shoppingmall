import React from 'react';
import { SERVER_URL } from '../../../Config';
import './UserCardBlock.css';

function UserCardBlock({ products, removeItem }) {
  const renderCartImage = (images) => {
    if (images.length > 0) {
      let image = images[0];
      return `${SERVER_URL}/${image}`;
    }
  };

  const renderItems = () =>
    products &&
    products.map((product, index) => (
      <tr key={index}>
        <td>
          <img
            style={{ width: '70px' }}
            alt="product"
            src={renderCartImage(product.images)}
          />
        </td>
        <td>{product.quantity} EA</td>
        <td>$ {product.price}</td>
        <td>
          <button onClick={() => removeItem(product._id)}>Remove</button>
        </td>
      </tr>
    ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product Image</th>
            <th>Product Quantity</th>
            <th>Product Price</th>
            <th>Remove from Cart</th>
          </tr>
        </thead>
        <tbody>{renderItems()}</tbody>
      </table>
    </div>
  );
}

export default UserCardBlock;
