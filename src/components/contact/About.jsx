import React from 'react'
import me from "../../assets/KARAN.jpg"
function About() {
  return (
<section id="about" class="about">
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <h2>About Btech Burger</h2>
        <p>Btech Burger is your ultimate destination for delicious and mouth-watering burgers. We take pride in using only the finest ingredients to create our signature burgers that are sure to satisfy your cravings.</p>
        <p>At Btech Burger, we believe in quality, freshness, and flavor. Whether you're a meat lover or prefer vegetarian options, we have something for everyone on our menu.</p>
      </div>
      <div class="col-lg-6">
        <img src="https://www.shutterstock.com/image-photo/classic-hamburger-stock-photo-isolated-600nw-2282033179.jpg" alt="Btech Burger" class="img-fluid"/>
      </div>
    </div>


    <div className='founder'>
      <h2>Founder</h2>
      <div>
        <img src={me} alt="" height={500} />
        <h3>karan Kumar</h3>
      </div>

    </div>
  </div>
</section>

  )
}

export default About
