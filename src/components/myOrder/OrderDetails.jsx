import React from 'react'

function OrderDetails() {
  return (
  <section className='orderdetails'>


<main>
    <h1>Order Details</h1>
    <div>
        <h1>Shipping </h1>
        <p>
            <b>Address</b>
            {"jfjakk ksmsmsm dsmdmd "}
        </p>
    </div>
    <div>
        <h1>Contact</h1>
        <p>
            <b>Name</b>
            {"karan"}
        </p>
        <p>
            <b>Name</b>
            {"2345678"}
        </p>
    </div>
    <div>
        <h1>Status</h1>
        <p>
            <b>Order Status</b>
            {"Processing"}
        </p>
        <p>
            <b>Place At</b>
            {"30-04-2024"}
        </p>
        <p>
            <b>Delivered At</b>
            {"29-10-2024"}
        </p>
    </div>
    <div>
        <h1>Payment</h1>
        <p>
            <b>Payment Method</b>
            {"Online"}
        </p>
        <p>
            <b>Payment Ref</b>
            {"adfxdsfdsd"}
        </p>
        <p>
            <b>paid At</b>
            {"29-10-2024"}
        </p>
    </div>
    <div>
        <h1>Amount</h1>
        <p>
            <b>items Total </b>₹{"123"}
           
        </p>
        <p>
            <b>shipping charges</b>
            ₹{"123"}
        </p>
        <p>
            <b>tax charge </b>
            ₹{"123"}
        </p>
        <p>
            <b>Total Amount  </b>
            ₹{"123"}
        </p>
    </div>
    <article>
        <h1>Ordered Item</h1>
        <div>
            <h4>Cheese Burger</h4>
            <div>
                <span>{12}</span>  X <span>{232}</span>
            </div>
        </div>
        <div>
            <h4>Cheese Burger</h4>
            <div>
                <span>{12}</span>  X <span>{232}</span>
            </div>
        </div>
        <div>
            <h4>Cheese Burger</h4>
            <div>
                <span>{12}</span>  X <span>{232}</span>
            </div>
        </div>
        <div>
            <h4>Sub Total</h4>
            <h4>₹{"2560"}</h4>
        </div>
    </article>
</main>
  </section>
  )
}

export default OrderDetails
