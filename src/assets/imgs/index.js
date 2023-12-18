import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { WrapBookTicket } from '../../conponent/index.js';
import slider2 from '../../assets/imgs/slider2.jpg';
import img7 from '../../assets/imgs/7.jpg';
import slider3 from '../../assets/imgs/slider3.jpg';
import slider4 from '../../assets/imgs/slider4.jpg';
import slider5 from '../../assets/imgs/slider5.jpg';
import ScheduleBoatImage from '../../assets/imgs/ScheduleBoat5.jpg';
import ConDaoImage from '../../assets/imgs/con-dao.jpg';
import './home.scss';
const CustomPrevArrow = (props) => (
  <div
    {...props}
    style={{ ...props.style, left: '10px', zIndex: 1 }}
  >
    <button>Prev</button>
  </div>
);

const CustomNextArrow = (props) => (
  <div
    {...props}
    style={{ ...props.style, right: '10px', zIndex: 1 }}
  >
    <button>Next</button>
  </div>
);

const Home = () => {

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="home-container">
      <WrapBookTicket
        hideNavbar
      />
      <style>
        {`
          .slick-slide {
            transition: height 0.5s;
            overflow: hidden;
          }
          .slick-slide img {
            width: 100%;
          }
        `}
      </style>
      <Slider {...sliderSettings}>
        <div className="p-4">
          <img src={slider2} alt="Slider 2" />
        </div>
        <div className="p-4">
          <img src={img7} alt="7" />
        </div>
        <div className="p-4">
          <img src={slider3} alt="Slider 3" />
        </div>
        <div className="p-4">
          <img src={slider4} alt="Slider 4" />
        </div>
        <div className="p-4">
          <img src={slider5} alt="Slider 5" />
        </div>
      </Slider>

      <div className="row m-t-10">
        <div className="col-sm-6">
          <div className="panel panel-primary schedule-boat">
            <div className="panel-heading">
              <h3 className="panel-title text-center" style={{ fontFamily: 'Roboto',color: '#FFFF00' }}>TỐC HÀNH</h3>
            </div>
            <div className="content" style={{ backgroundColor: '#fff' }}>
               <img src={ScheduleBoatImage} style={{ width: '100%' }} alt="Schedule Boat" />
            </div>

          </div>
        </div>
        <div className="col-sm-6" >
          <div className="panel panel-primary place-boat">
            <div className="panel-heading">
              <h3 className="panel-title text-center"style={{ fontFamily: 'Roboto',color: '#FFFF00', }}>SANG TRỌNG</h3>
            </div>
            <div className="content" style={{ backgroundColor: '#fff' }}>
              <img src={ConDaoImage} style={{ width: '100%' }} alt="Con Dao" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
