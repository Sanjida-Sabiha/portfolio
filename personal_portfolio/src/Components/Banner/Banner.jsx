import React, { Fragment } from 'react'
import { Col, Container, Row, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import AnimatedText from 'react-animated-text-content';

const Banner = () => {
  return (
    <Fragment>
        <Container fluid={true} className="topBackgroundBanner">
            <div className="Banneroverlay">
            </div>
            <Container>
                <Row>
                    <div className="banner">
                        <Col lg={12} md={12} sm={12}>
                            <div className="bannerInfo">
                                <h4 className="bannerMainTitle">Hello, I am <span className="bannerTitle">
                                    <AnimatedText
                                        type="character"
                                        animation={{
                                        x: '200px',
                                        y: '-20px',
                                        scale: 1,
                                        ease: 'ease-in-out',
                                        }}
                                        animationType="wave"
                                        interval={0.09}
                                        duration={1}
                                        tag="span"
                                        className="bannerTitle"
                                        includeWhiteSpaces
                                    
                                    >
                                    
                                        Sanjida Sabiha

                                    </AnimatedText>    
                                    
                                    </span><span className="bannerSubTitle">I'm a Web Application Developer</span></h4>
                                <div className="socialLinks">
                                    <a href=""><FontAwesomeIcon className="brandIcon" icon={faFacebook} /></a>
                                    <a href=""><FontAwesomeIcon className="brandIcon" icon={faLinkedin}/></a>
                                    <a href=""><FontAwesomeIcon className="brandIcon" icon={faTwitter}/></a>
                                </div>
                                <Button className="navButton">More Details</Button> 
                            </div>
                        </Col>
                    </div>
                </Row>
            </Container>
            
        </Container>
    </Fragment>
  )
}

export default Banner