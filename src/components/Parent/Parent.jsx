import { useState } from "react";
import Child from "../Child/Child";

function Parent() {
  const [product, setProduct] = useState([
    {
      name: "toshiba",
      onSale: false,
      category: "tv",
      id: "05",
      price: "3000",
      count: 0,
    },
    {
      name: "oppo",
      onSale: true,
      category: "mob",
      id: "55",
      price: "5000",
      count: 0,
    },
    {
      name: "iphone",
      onSale: false,
      category: "mac",
      id: "75",
      price: "75000",
      count: 0,
    },
    {
      name: "samsung",
      onSale: true,
      category: "tv",
      id: "85",
      price: "2000",
      count: 0,
    },
  ]);

  function deleteProduct(productFromChild) {
    const newProduct = structuredClone(product);
    const turn = newProduct.filter(function (p) {
      return productFromChild.id !== p.id;
    });
    setProduct(turn);

    console.log("deleted");
  }

  function updateProduct(index) {
    console.log("updated");
    const newCount = structuredClone(product);
    newCount[index].count++;
    setProduct(newCount);
  }

  return (
    <div>
      <div className="container mt-28 bg-red-950 grid mx-auto sm:grid-cols-2 p-5 lg:grid-cols-3 gap-3 ">
        {/* map ---> byb3at ma3 kol item, el index, wel array kolaha*/}
        {product.map(function (p , index) {
          return (
            <Child
              product={p}
              deleteProduct={deleteProduct}
              updateProduct={updateProduct}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Parent;
