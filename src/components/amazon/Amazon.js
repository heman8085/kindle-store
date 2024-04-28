import React, { useContext } from "react";
import list from "../../data";
import Card from "../card/Card";
import { AmazonContext } from "../store/AmazonContext";

const Amazon = () => {
  const { addToCartHandler } = useContext(AmazonContext);
  return (
    <section>
      {list.map((item) => (
        <Card item={item} key={item.id} addToCartHandler={addToCartHandler}/>
      ))}
    </section>
  );
};

export default Amazon;
