import React from 'react';
import{Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";

const Services = () => {
  return (
    <div className="services">

<Carousel  infiniteLoop autoPlay showStatus={false} interval={2000} showThumbs={false} >

<div>
  <img src={pic3} alt="Item1" /> 
  <p className="legend">Full Stack</p>
</div>
<div>
  <img src={pic4} alt="Item2" /> 
  <p className="legend">Peer-to-Peer</p>
</div>
<div>
  <img src="https://www.nitorinfotech.com/wp-content/uploads/2021/12/4-Pillars-of-Cloud-Computing-1.jpg" alt="Item2" /> 
  <p className="legend">Cloud Computing</p>
</div>

</Carousel>

    </div>
  )
}

export default Services
