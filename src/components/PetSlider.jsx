import React from "react";
import Slider from "react-slick";
import petPicsData from "./petPics";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function PetSlider(props) {
  let settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 3200,
    speed: 900,
    slidesToShow: 1,
    variableWidth: true,
    slidesToScroll: 1
  };

  const petPic = petPicsData.map(pet => (
    <div key={pet.key}>
      <img className="pet-pics" src={pet.imgSource} alt={pet.alt} />
    </div>
  )
    
  )

  return (
    <div className="slider">
			<Slider {...settings}>
      {petPic}
    </Slider>
		</div>
  );
}
