import React from 'react'
import {Link} from 'react-router-dom'
function Payment() {
  return (
   <section className='payment'>
    <main>
        <h2>Order Placed </h2>
        <p>Order Placed Successfully , you can check order status</p>
      <Link to="/myorders"> Status</Link>
    </main>
   </section>
  )
}

export default Payment
