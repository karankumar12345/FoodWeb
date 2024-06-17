import React from 'react'
import {AiFillInstagram,AiFillFacebook,AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
function Footer() {
  return (
  <footer>
    <div>
        <h2>Btech Burger Wala</h2>
        <p>Engineering Gastronomy at its Finest! Taste the Future at <strong>BTech Burger Vala</strong>.</p>
  <p>Bite into Innovation with our <em>Tech-infused Burgers</em>. Experience the Ultimate Blend of Science and Flavor in Every Bite!</p>
  <p className='copy'>&copy; 2024 BTech Burger Vala. All Rights Reserved.</p>

    </div>
    <aside>
        <h4>follow us</h4>
        <a href="https://www.instagram.com/karankumar31299/"><AiFillInstagram/></a>
        <a href="https://www.linkedin.com/in/karan-kumar-823190256/"><AiFillLinkedin/></a>
        <a href="https://www.facebook.com/profile.php?id=100048134636789"><AiFillFacebook/></a>
        
        <a href="https://github.com/karankumar12345"><AiFillGithub/></a>
    </aside>
  </footer>
  )
}

export default Footer
