// У вас есть список продуктов. Необходимо отобразить этот список вместе с ценами на продукты,
// к каждому элементу продукта добавить кнопку DELETE, после нажатия на кнопку продукт из списка должен быть удалён

// [
//     { id: 1, name: "Яблоко", price: 1 },
//     { id: 2, name: "Банан", price: 2 },
//     { id: 3, name: "Апельсин", price: 3 },
//     { id: 4, name: "Груша", price: 4 },
//     { id: 5, name: "Молоко", price: 5 },
//     { id: 6, name: "Хлеб", price: 3 },

//   ]

import { useState } from "react";
import "./styles.css";
import Button from "../../components/Button/Button";

function Consultation03() {
  const [list, setList] = useState([
    { id: 1, name: "Яблоко", price: 1 },
    { id: 2, name: "Банан", price: 2 },
    { id: 3, name: "Апельсин", price: 3 },
    { id: 4, name: "Груша", price: 4 },
    { id: 5, name: "Молоко", price: 5 },
    { id: 6, name: "Хлеб", price: 3 },
  ]);
  const deleteProduct = (idProduct) => {
    const filteredProductList = list.filter(
      (product) => idProduct !== product.id
    );
    setList(filteredProductList);
  };

  const productsList = list.map((product, index) => {
    return (
      <div className="product" key={product.id}>
        <div className="product-name-container">
          <p>{product.name}</p>
        </div>
        <div className="product-price-container">
          <p>{product.price}$</p>
        </div>
        <div className="button-wrapper">
          <Button
            name="Delete"
            onClick={() => {
              deleteProduct(product.id);
            }}
          />
        </div>
      </div>
    );
  });
  return (
    <div className="consultation03-wrapper">
      <h3 className="title">Список продуктов</h3>
      <div className="products-list-wrapper">{productsList}</div>
    </div>
  );
}

export default Consultation03;
