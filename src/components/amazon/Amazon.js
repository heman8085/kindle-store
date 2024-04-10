import React from "react";
import list from "../../data";
import Card from "../card/Card";

const Amazon = ({addToCartHandler}) => {
  return (
    <section>
      {list.map((item) => (
        <Card item={item} key={item.id} addToCartHandler={addToCartHandler}/>
      ))}
    </section>
  );
};

export default Amazon;
