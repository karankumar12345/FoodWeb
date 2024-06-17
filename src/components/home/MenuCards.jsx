import React from 'react'
import {motion} from 'framer-motion'
function MenuCards({ItemName,burgerSrc,price,title,handler,delay}) {
  return (
    <motion.div
    className='menucard'
    initial={{
      x:"-100%",
      opacity:0,
    }}
    whileInView={{
      x:0,
      opacity:1,
    }}
    transition={{
      delay,
    }}
    >
        <div>Item {ItemName}</div>
        <main>
            <img src={burgerSrc} alt={ItemName}  height={300} width={230}/>
            <h5>₹{price}</h5>
            <p>{title}</p>
            <button onClick={()=>handler(ItemName)}>Buy Now </button>
        </main>
      

    </motion.div>
  )
}

export default MenuCards
