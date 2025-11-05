import "./styles.css";

function Product({productId, productName, productPrice }) {
  return (
    <div className="products-wrapper">
      <div product-card-container>
        <h3>{productId}</h3>
       <h3>{productName}</h3>
      <div>{productPrice}</div>
      </div>
    </div>
  );
}

export default Product;
