import "./styles.css";

function Product({ productName, productPrice }) {
  return (
    <div className="product-wrapper">
      <h3>{productName}</h3>
      {/* Пример тернарного оператора для скрытия элемента */}
      {/* {productPrice !== undefined ? <div>{productPrice}$</div> : null} */}
      {/* true ? <div>: null */}
      {/* {productPrice ? <div>{productPrice}$</div> : null} */}
      {/* Пример использования оператора условного рендеринга */}
      {productPrice && <div>{productPrice}$</div>}
      {/* <div>{productPrice}$</div> */}
    </div>
  );
}

export default Product;
