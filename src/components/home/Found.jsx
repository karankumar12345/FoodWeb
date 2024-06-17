import React from 'react'
import {motion} from 'framer-motion'
function Found() {
    const options={
        initial:{
            
               x:"-100%",
               opacity:0
            
         },
         whileInView:{
            x:0,
            opacity:1
         }
    }
  return (
 <section className='founder'>
<motion.div
{...options}>


    <img src="https://lh3.googleusercontent.com/pw/AP1GczN3g5kVr6c4vUGrlbeL6G1d22C7pCRLXOewu00fGJeif4f2eD2LjAZi77QU5WDf7IW4y7I0mQ5AfJBSebLJzsc-SkIDz8ggkNhIKIOn2bxXz3cIgZ23zxX0kawwcFHnYLQyctgrJ0-Mog5QnfKhjHz0h9GV5HXsSoa8NqJho_rfwAkmqlkNhb-WvME3UqSXD0bqc-Hbfq0b7bvlG91AMeACZ5luD9UoLyvag11iBPEwkcJqfUBDbBS9I2m4qfBx0cJdjEakJOaN7D5T6-vyQnTxYmsyn8baaGCzO8h3Wl_zehbPqjw0p9ingxbHtYqLMlroBUBs3VM2bHsUAW1u8PQODQYTXKbDkP-g731lPWv9T-L93ITmeIP6c23-L-xDr-XeO_1LlbhL7QzE7q4eG_ZTs_wxtJnetGx38wbHEhJbovoR_0eCNpwxTM5VVC63Mbmr718GOEC015qK0i8UJMkO-V8xHvSQv_WohV_sMgXyE7TF8iHsE0tRo6e61xECdhdv_gf-scAehZFTq4rUmUM9w8eYyA87e1jjBG5kuQEOqAfJfkpt0fYocbFB5hoCjrQ4MaHibo0aHLHmPJ_RucejkILY-p3dfAWia0jSRH6B68Q5gapKT0jMPm-evlbq2G1BBjXgaWdiVFQB5Yv4TNuZc-gwVcWXiwnyYJnWl5Ebu94QI_U36LyF2FpbbQsXdQoAcfzE4A5dznJmC5z3iC0Bu9fsZxBseH7mTNkRT75GUYchsZGDNEkZTKL2X3aIqmSOiUPEl-rBT4KHypj3E64DG8zkRsWVJq1XkYNfJ2sZu2TJb94t_ZKLhRR6nN7VlgnmsKtfyQQ5jCEhEuRuBhbiv8O7YV4sfC4SOKZwx1j5GcHVH0cxMvmx_ZvprXOLhyK2uw1FeQaIFT45-Y8stKAlExo=w720-h720-s-no-gm?authuser=0" alt="" height={200} width={200}  />
    <h3>KARAN KUMAR</h3>
    <p>Welcome to Burger Haven: Where passion meets perfection. Our handcrafted burgers tell a story of flavor and flair, crafted with love and care. Join our community united by a love for culinary excellence. Ethical sourcing, eco-friendly practices – taste the difference. Savor the moment with every bite. Indulge in the enchanting magic of Burger Haven today</p> 
</motion.div>
 </section>
  )
}

export default Found
