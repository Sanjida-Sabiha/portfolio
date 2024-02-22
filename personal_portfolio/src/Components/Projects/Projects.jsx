import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Medical from '../../assets/images/projects/medical.png'
import Corporate from '../../assets/images/projects/business.png'
import ECommerce from '../../assets/images/projects/e-commerce.png'
import ELearning from '../../assets/images/projects/e-learning.png'
import Gaming from '../../assets/images/projects/gaming.png'
import Tech from '../../assets/images/projects/tech-startup.png'

import Medical_ss from '../../assets/images/full-projects/full_medical.png'
import corporate_ss from '../../assets/images/full-projects/full_corporate.png'
import e_commerce_ss from '../../assets/images/full-projects/full_e-commerce.png'
import e_learning_ss from '../../assets/images/full-projects/full_e-learning.png'
import magazine_ss from '../../assets/images/full-projects/full_magazine.png'
import tech_ss from '../../assets/images/full-projects/full_tech.png'
import { motion } from "framer-motion"


const settings = {
    centerMode: true,
    autoplaySpeed: 2000,
    infinite: true,
    autoplay: true,
    dots: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


const Projects = () => {
  return (
    <Fragment>
        <Container fluid={true} className="mainServices pt-80 pb-80">
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <div className="aboutOverlay">
                        <motion.h1 className="aboutOverlayTitle"
                            viewport={{once:false}}
                            initial={{opacity:0, y:-250 }}
                            whileInView={{opacity:1, y:0}}
                            transition={{type:'easeIn',
                                duration:.5,
                                delay:.5
                            }}
                        >PORTFOLIO</motion.h1>
                        <div className="aboutTitle">
                            <h5 className="infoMainTitle">My <span className="infoTitle">Works</span></h5>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className="mainProjects mt-5">
                <Slider {...settings}>
                    <div className="mainProjectsBox project">
                        <div className="projectsImg">
                            <img src={Medical} alt="" />
                            <div className="projectsInfo">
                                <a href={Medical_ss} className="projectsTitle">Medical</a>
                                <p className="projectsSubTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, perferendis.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mainProjectsBox project">
                        <div className="projectsImg">
                            <img src={Corporate} alt="" />
                            <div className="projectsInfo">
                                <a href={corporate_ss} className="projectsTitle">Corporate</a>
                                <p className="projectsSubTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, perferendis.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mainProjectsBox project">
                        <div className="projectsImg">
                            <img src={ECommerce} alt="" />
                            <div className="projectsInfo">
                                <a href={e_commerce_ss} className="projectsTitle">E-Commerce</a>
                                <p className="projectsSubTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, perferendis.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mainProjectsBox project">
                        <div className="projectsImg">
                            <img src={ELearning} alt="" />
                            <div className="projectsInfo">
                                <a href={e_learning_ss} className="projectsTitle">E-Learning</a>
                                <p className="projectsSubTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, perferendis.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mainProjectsBox project">
                        <div className="projectsImg">
                            <img src={Gaming} alt="" />
                            <div className="projectsInfo">
                                <a href={magazine_ss} className="projectsTitle">Gaming Magazine</a>
                                <p className="projectsSubTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, perferendis.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mainProjectsBox project">
                        <div className="projectsImg">
                            <img src={Tech} alt="" />
                            <div className="projectsInfo">
                                <a href={tech_ss} className="projectsTitle">Tech Startup</a>
                                <p className="projectsSubTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, perferendis.</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </Container>
    </Fragment>
  )
}

export default Projects