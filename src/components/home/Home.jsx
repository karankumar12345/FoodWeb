import React from 'react'
import {motion} from 'framer-motion'
import Found from './Found'
import Menu from './Menu'
function Home() {
  return (
   <>
   <section className='home'>
         <div>
            <motion.h1
            initial={
               {
                  x:"-100%",
                  opacity:0
               }
            }
            whileInView={{
               x:0,
               opacity:1
            }}>Btech Burger Vala</motion.h1>
            <motion.p
               initial={
                  {
                     x:"-100%",
                     opacity:0
                  }
               }
               whileInView={{
                  x:0,
                  opacity:1
               }}
               transition={{delay:0.2}}
            >Give yourself a tasty burger </motion.p>
         </div>
         <motion.a 
         initial={{
            y:"-100%",
            opacity:0,
         }} 
         whileInView={{
            y:0,
            opacity:1
         }}
         href="#menu">
            Explore Menu 
         </motion.a>
         {/* <Found/> */}
   </section>
   <Found/>
   <Menu/>

   </>
  )
}

export default Home
