import React from 'react'
import {Country,State} from 'country-state-city'
import {Link} from 'react-router-dom'
function Shipping() {
  return (
   <section className='shipping'>

    <main>
        <h1>Shipping Details</h1>
        <form>
            <div>
                <label >H.No</label>
                <input type="text" name="" id="" placeholder='Enter your House No.' />

            </div>
            <div>
                <label >City</label>
                <input type="text" name="" id="" placeholder='Enter your City Name.' />

            </div>
            <div>
                <label >Country</label>
             <select >
                <option value="">Country</option>
                <option value="">India</option>
               {
                Country && Country.getAllCountries().map(i=>(
                    <option value={i.isoCode} key={i.name} >{i.name}</option>
                ))
               }
             </select>

            </div>
            <div>
                <label >State</label>
             <select >
                <option value="">State</option>
                {
             State && State.getStatesOfCountry("IN").map(j=>(
                <option value={j.isoCode} key={j.name} >{j.name}</option>
             ))
               }
             </select>

            </div>
            <div>
                <label >Pin Code</label>
                <input type="text" name="" id="" placeholder='Enter your pincode No.' />

            </div>
            <div>
                <label >Phone Number </label>
                <input type="tel" name="" id="" placeholder='Enter your  Phone no' />

            </div>
            <div>
                <label > Alterate Phone Number </label>
                <input type="tel" name="" id="" placeholder='Enter your Alt  Phone no' />

            </div>
<Link to="/confirm">Confirm Order</Link>
        </form>
    </main>
   </section>
  )
}

export default Shipping
