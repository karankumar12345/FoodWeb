import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CartItem = ({ value, title, img, decrement, increment }) => {
  return (
    <div className="cartItem">
      <div>
        <h4>{title}</h4>
        <motion.img
          initial={{ x: "-500%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          src={img}
          alt="Item"
          height={100}
        />
      </div>
      <div>
        <button onClick={decrement}>-</button>
        <input type="number" readOnly value={value} />
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

const Card = () => {
  const [items, setItems] = useState([
    { id: 1, title: "Cheese Burger", img: "https://www.recipetineats.com/wp-content/uploads/2022/08/Stack-of-cheeseburgers.jpg?resize=650,813", quantity: 0, price: 200 },
    { id: 2, title: "Bacon Burger", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSXvwW2fbmCvQbgSwevSZUzV3vvhod9c7sqQ&s", quantity: 0, price: 200 },
    { id: 3, title: "Mushroom Swiss Burger", img: "https://whitneybond.com/wp-content/uploads/2023/05/mushroom-swiss-burger-14.jpeg", quantity: 0, price: 200},
    { id: 4, title: "Chicken Burger", img: "https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Crispy-Chicken-Burger-square-FS-4518.jpg", quantity: 0, price: 200}
  ]);

  const increment = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decrement = (id) => {
    setItems(items.map(item => item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  const subtotal = items.reduce((total, item) => total + item.quantity * item.price, 0);
  const tax = subtotal * 0.18;
  const deliveryCharge = 200;
  const total = subtotal + tax + deliveryCharge;

  return (
    <section className="cart">
      <main>
        {items.map(item => (
          <CartItem
            key={item.id}
            title={item.title}
            img={item.img}
            value={item.quantity}
            increment={() => increment(item.id)}
            decrement={() => decrement(item.id)}
          />
        ))}
        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{subtotal.toFixed(2)}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{tax.toFixed(2)}</p>
          </div>
          <div>
            <h4>Delivery Charge</h4>
            <p>₹{deliveryCharge.toFixed(2)}</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>₹{total.toFixed(2)}</p>
          </div>
          <Link to="/shipping">CheckOut</Link>
        </article>
      </main>
    </section>
  );
};

export default Card;
