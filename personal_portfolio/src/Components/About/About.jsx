import React, { Fragment } from 'react'
import { Col, Container, Row, Button} from 'react-bootstrap';
import { motion } from "framer-motion"
import Resume from '../../assets/CV.pdf'

const About = () => {
  return (
    
    <Fragment>
        <Container className="aboutMain pt-80 pb-80">
            <div className="aboutOverlay">
                <motion.h1 className="aboutOverlayTitle"
                    viewport={{once:false}}
                    initial={{opacity:1, y:-250 }}
                    whileInView={{opacity:1, y:0}}
                    transition={{type:'easeIn',
                        duration:.5,
                        delay:.5
                    }}
                >ABOUT ME</motion.h1>
                <div className="aboutTitle">
                    <h5 className="infoMainTitle">Know <span className="infoTitle">Me</span> More</h5>
                </div>
            </div>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <div className="aboutInfo pt-5">
                        <p className="aboutInfoTitle">I'm <span className="infoTitle">Sanjida Sabiha, </span> Web Application Developer!</p>
                        <p className="aboutInfoSub">As a Web Application Developer, 
                        I possess a strong passion for crafting digital 
                        experiences that seamlessly blend functionality 
                        with aesthetics. With a solid foundation in programming 
                        languages such as HTML, CSS, and JavaScript, 
                        I thrive on translating innovative ideas into tangible 
                        online solutions. </p>
                        <p className="aboutInfoSubTitle">My experience encompasses both front-end 
                        and back-end development, allowing me to architect dynamic 
                        and responsive user interfaces while ensuring robust 
                        server-side functionality. Beyond technical skills, 
                        I am adept at collaborating with cross-functional teams, 
                        understanding user needs, and implementing efficient solutions
                        that enhance user engagement and satisfaction.</p>
                    </div>
                    <div className="aboutBtn">
                        <button className="aboutButton">More Details</button> 
                        <a 
                            className="aboutButton"
                              href={Resume}
                              download="my cv"
                              target="_blank"            
                            
                            >Download CV</a>
                        
                    </div>
                </Col>
            </Row>
        </Container>
    </Fragment>
  )
}

export default About