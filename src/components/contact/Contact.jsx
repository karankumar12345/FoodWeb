import React from 'react'
import {motion} from 'framer-motion'
function Contact() {
  return (
    <div>
      <section className='contact'>

<motion.form
  initial={
    {
       x:"-100%",
       opacity:0,
       
    }
 }
 whileInView={{
    x:0,
    opacity:1
 }}

>
    <h2>Contact Us </h2>
    <input type="text" placeholder='Name' /> 
    <input type="email" name="" id=""  placeholder='Email'/>

    <textarea placeholder='Message' id="" cols="30" rows="10"></textarea>
    <button type='submit'>SEND</button>
</motion.form>
     
      </section>
    </div>
  )
}

export default Contact
