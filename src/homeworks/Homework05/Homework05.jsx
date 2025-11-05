import { v4 } from "uuid";

import "./styles.css";
import { products } from "./data";
import Product from "../../components/Product/Product";

function Homework05() {
  const productCards = products.map((product, index, array) => {
    return (
      <Product
      key={v4()} 
      productId={product.id} 
      productName={product.name} 
      productPrice={product.price} 
      />
    );
  });

  return (
    <div className="homework05-wrapper">
     {productCards}
    </div>
  );
}

export default Homework05;
