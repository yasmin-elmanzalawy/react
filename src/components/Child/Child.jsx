// import React from 'react'

export default function Child({product, deleteProduct,updateProduct,index}) {
    function deleteProductDisplay(){
      deleteProduct(product);
    }
    function updateCounterDisplay(){
      console.log('hi');
      updateProduct(index);
    }
  return (
    <div className="bg-red-400 p-5 rounded-xl">
        <h2>Product</h2>
        <h2> name: {product.name}</h2>
        <h2> price: {product.price}</h2>
        <h2> category: {product.category}</h2>
        <h2> count: {product.count}</h2>
        

        {/* {product.onSale? <span className="bg-slate-500">On Sale{product.onSale}</span>:null} */}
        {product.onSale&&<span className="bg-slate-500 m-2 mt-5 rounded p-1">On Sale{product.onSale}</span>}
        <br />
        <button onClick={deleteProductDisplay} className="bg-red-200 m-2 p-1 rounded">delete</button>
        <button onClick={updateCounterDisplay} className="bg-red-200 m-2 p-1 rounded">update counter</button>
    </div>
  )
}
