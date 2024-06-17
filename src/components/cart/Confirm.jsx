import React from 'react'

function Confirm() {
  return (
  <section className='confirmOrder'>


<main>
    <h1>Confirm Order </h1>
    <form> 
        <div>
            <label> Cash On Delivery </label>
            <input type="radio" name="payment" id="" />
        </div>
        <div>
            <label> Online </label>
            <input type="radio" name="payment" id="" />
        </div>
        <button type="submit">Payment </button>
    </form>
</main>
  </section>
  )
}

export default Confirm
