import React from 'react'
import {motion} from "framer-motion";
import {FcGoogle} from "react-icons/fc"
function Login() {
  return (
 <section className='login'>
    <motion.button
    initial={{
        y:"-500%"
    }}
    animate={{
        y:0
    }}
    >
        Login With Google 
        <FcGoogle/>
    </motion.button>

 </section>
  )
}

export default Login;
