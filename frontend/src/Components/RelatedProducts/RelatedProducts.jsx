import React, { useEffect, useState } from "react";
import "./RelatedProducts.css";
import Item from "../Items/Item";

const RelatedProducts = () => {
  const [related_products, setRelated_products] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/relatedproducts")
      .then((response) => response.json())
      .then((data) => setRelated_products(data));
  }, []);
  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {related_products.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
