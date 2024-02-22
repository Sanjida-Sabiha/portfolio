import React, { Fragment, useState } from 'react'
import { Col, Container, Row, Button, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion"

const Contact = () => {


    const [user,setInput]=useState(
        {

            
            name:"",
            email:"",
            formText:""


          });

          const handleChange=(event)=>{
      
              const name=event.target.name;
              const value=event.target.value;
              setInput({
      
                  ...user,[name]:value
              });
          };
          const handleSubmit=(event)=>{
            event.preventDefault();
            alert(JSON.stringify(user))
        }
  return (
    <Fragment>
        <Container className="pt-80 pb-80">
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
                  
                  >CONTACT</motion.h1>
                    <div className="aboutTitle">
                      <h5 className="infoMainTitle">Get <span className="infoTitle">in</span> Touch</h5>
                    </div>
                </div>
              </Col>
            </Row>
            <Row>
              <div className="contactMain d-flex">
                  <Col lg={6} md={12} sm={12}>
                      <div className="ContactMainInfo">
                          <h5 className="contactTitle">Let's Work Together</h5>
                          <p className="contactSubTitle">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Voluptas odio ipsum porro aspernatur quam est aliquam ducimus.</p>
                      </div>
                      <div className="contactInfo">
                          <h5 className="contactTitle mt-4 mb-3">Address</h5>
                          <p className="Icon"><FontAwesomeIcon className="contactIcon" icon={faLocationDot} />Jharnarpar, Kumarpara, Sylhet.</p>
                          <p className="Icon"><FontAwesomeIcon className="contactIcon" icon={faPhone} />01970163926</p>
                          <p className="Icon"><FontAwesomeIcon className="contactIcon" icon={faEnvelope} />sabihasanjida7@gmail.com</p>
                      </div>
                  </Col>
                  <Col lg={6} md={12} sm={12}>
                    <div className="contactForm">
                    <h5 className="contactTitle pb-3">Send Me A Note</h5>
                      <Form action="" onSubmit={handleSubmit}>
                        <input type="text" name="name" className="formInput" placeholder="Enter Your Name" onChange={handleChange} />
                        <input type="email" name="email" className="formInput" placeholder="Enter Your Email" onChange={handleChange} />
                        <textarea className="formText" placeholder="Text Here" name="messages" cols="10" rows="10" onChange={handleChange}></textarea>
                        <Button type="submit" className="aboutButton contactBtn">Submit</Button>
                      </Form>
                    </div>
                  </Col>
              </div>
            </Row>
        </Container>
    </Fragment>
  )
}

export default Contact