import React, { Fragment } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode} from  '@fortawesome/free-solid-svg-icons'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { motion } from "framer-motion"

const Services = () => {
  return (
    <Fragment>
        <Container fluid={true} className=" mainServices pt-80 pb-80">
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
                        >SERVICES</motion.h1>
                        <div className="aboutTitle">
                            <h5 className="infoMainTitle Info">What <span className="infoTitle">I </span>Do?</h5>
                        </div>
                    </div> 
                </Col>
            </Row>
            <Container className="mainServicesBox">
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        <div className="servicesBox">
                            <p className="countUp">
                                <CountUp start={0} end={12}>
                                    {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </p>
                            <p className="Icon"><FontAwesomeIcon  className="servicesIcon" icon={faCode} /></p>
                            <h6 className="servicesTitle">Web Design</h6>
                            <p className="servicesSubTitle">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ullam non nulla animi, nobis maiores dolores corrupti ratione nostrum impedit.
                            </p>
                            <Button className="navButton aboutButton servicesBtn">Read More</Button>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className="servicesBox">
                            <p className="countUp">
                                <CountUp start={0} end={4}>
                                    {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </p>
                            <p className="Icon"><FontAwesomeIcon  className="servicesIcon" icon={faCode} /></p>
                            <h6 className="servicesTitle">PHP Development</h6>
                            <p className="servicesSubTitle">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ullam non nulla animi, nobis maiores dolores corrupti ratione nostrum impedit.
                            </p>
                            <Button className="navButton aboutButton servicesBtn">Read More</Button>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className="servicesBox">
                            <p className="countUp">
                                <CountUp start={0} end={5}>
                                    {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </p>
                            <p className="Icon"><FontAwesomeIcon  className="servicesIcon" icon={faCode} /></p>
                            <h6 className="servicesTitle">React JS</h6>
                            <p className="servicesSubTitle">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ullam non nulla animi, nobis maiores dolores corrupti ratione nostrum impedit.
                            </p>
                            <Button className="navButton aboutButton servicesBtn">Read More</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    </Fragment>
  )
}

export default Services