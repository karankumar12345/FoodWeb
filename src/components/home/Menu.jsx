import React from "react";
import MenuCards from "./MenuCards";

function Menu() {
  const addToCart= ()=>{

  }
  return (
    <section id="menu">
      <h1>MENU</h1>
      <div>
        <MenuCards
          ItemName={1}
          burgerSrc={
            "https://www.recipetineats.com/wp-content/uploads/2022/08/Stack-of-cheeseburgers.jpg?resize=650,813"
          }
          price={200}
          title={"Cheese Burger "}
          handler={addToCart}
          delay={0.1}
        />
        <MenuCards
          ItemName={2}
          burgerSrc={
            "https://www.recipetineats.com/wp-content/uploads/2022/08/Stack-of-cheeseburgers.jpg?resize=650,813"
          }
          price={200}
          title={"Bacon Burger "}
          handler={addToCart}
          delay={0.4}
        />
        <MenuCards
          ItemName={3}
          burgerSrc={
            "https://whitneybond.com/wp-content/uploads/2023/05/mushroom-swiss-burger-14.jpeg"
          }
          price={200}
          title={"Mushroom Swiss Burger "}
          handler={addToCart}
          delay={0.8}
        />
        <MenuCards
          ItemName={4}
          burgerSrc={
            "https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Crispy-Chicken-Burger-square-FS-4518.jpg"
          }
          price={200}
          title={"Chicken Burger "}
          handler={addToCart}
          delay={1}
        />
      
      </div>
    </section>
  );
}

export default Menu;
