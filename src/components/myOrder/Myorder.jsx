import React from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineEye} from "react-icons/ai"
function Myorder() {
    const arr=[1,2,3,4]
  return (
 <section className='table'>
    <main>
        <table>

            <thead>
                <tr>
                    <th>Order Id</th>
                    <th>Status</th>
                    <th>Item Qty</th>
                    <th>Amount</th>
                    <th>Payment Method</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                   arr.map(i=>(
                    <tr key={i} >
                    
                    <td>#fdfdfdsdfs</td>
                    <td>Processing</td>
                    <td>23</td>
                    <td>₹{34}</td>
                    <td>Online</td>
                  <td><Link to={`/order/${"asdasd"}`}><AiOutlineEye/></Link></td>

                </tr>
                   ))
                }
            </tbody>
        </table>
    </main>
 </section>
  )
}

export default Myorder
