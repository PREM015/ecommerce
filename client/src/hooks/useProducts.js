import { useState, useEffect } from 'react';
import API from '../api/axios'; // ✅ use your axios instance

function productlist() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get('/products') // correct endpoint
      .then((response) => {
        setProducts(response.data); // fixed typo
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <>
      <h1>🛒 Chai and Code Shop</h1>
      <p>Products loaded: {products.length}</p>

      {products.map((product) => (
        <div key={product._id}> {/* Use _id if from MongoDB */}
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>₹{product.price}</p>
        </div>
      ))}
    </>
  );
}

export default productlist;
