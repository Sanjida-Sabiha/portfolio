import React, { Fragment } from 'react'
import { Container, Row, Col, ProgressBar } from 'react-bootstrap'
import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faBootstrap, faJs, faPhp, faReact } from '@fortawesome/free-brands-svg-icons'
import { RadialBarChart, RadialBar, Legend, BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";





const data = [
    {
      name: "Creativity",
      skill: 31.47,
      pv: 2400,
      fill: "#1baa80"
    },
    {
      name: "Communication",
      skill: 26.69,
      pv: 4567,
      fill: "black"
    },
    {
      name: "Problem Solving",
      skill: 15.69,
      pv: 1398,
      fill: "#1baa80"
    },
    {
      name: "Team Work",
      skill: 8.22,
      pv: 9800,
      fill: "black"
    },
    
  ];
  
  const style = {
    top: 50,
    left: 400,
    lineHeight: "40px"
  };

const Skills = () => {
  return (
    <Fragment>
        <Container className="mainSkill pt-80 pb-80">
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
                    >SUMMARY</motion.h1>
                    <div className="aboutTitle">
                      <h5 className="infoMainTitle">My <span className="infoTitle">Skills</span></h5>
                    </div>
                  </div>
                </Col>
            </Row>
            <Container className="skillsMainBar">
                <Row>
                    <Col xl={6} lg={12} md={12} sm={12}>
                        <div className="technicalSkills">
                            <h5 className="BarTitle">Technical Skills</h5>
                            <div style={{ width:'75%', height:'600px'}} className="tinyBar ms-5">
                              <div className="bar">
                                <p className="mb-0"><FontAwesomeIcon className="barIcon" icon={faHtml5} style={{color: "#f80d0d",}} /></p>
                                <span className="barTitle mt-0">HTML</span>
                                <ProgressBar className="progressCustom" style={{Color: 'black'}} now={90} label={`${90}%`} />
                              </div>

                              <div className="bar">
                                <p className="mb-0"><FontAwesomeIcon className="barIcon" icon={faCss3Alt} style={{color: "#0c5fed",}} /></p>
                                <span className="barTitle mt-0">CSS</span>
                                <ProgressBar className="progressCustom" now={90} label={`${90}%`} />
                              </div>

                              <div className="bar">
                                <p className="mb-0"><svg width="30" height="18" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 0c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.141.285 1.957 1.113 2.86 2.03C17.08 7.271 18.782 9 22.5 9c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.141-.285-1.957-1.113-2.86-2.03C20.42 1.728 18.718 0 15 0ZM7.5 9C3.5 9 1 11 0 15c1.5-2 3.25-2.75 5.25-2.25 1.141.285 1.957 1.113 2.86 2.03C9.58 16.271 11.282 18 15 18c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.141-.285-1.957-1.113-2.86-2.03C12.92 10.729 11.218 9 7.5 9Z" fill="#38BDF8"></path></svg></p>
                                <span className="barTitle mt-0">Tailwind CSS</span>
                                <ProgressBar className="progressCustom" now={80} label={`${80}%`}  />
                              </div>

                              <div className="bar">
                                <p className="mb-0"><FontAwesomeIcon className="barIcon" icon={faBootstrap} style={{color: "#5b19d7",}} /></p>
                                <span className="barTitle mt-0">BootStrap</span>
                                <ProgressBar className="progressCustom" now={80} label={`${80}%`}  />
                              </div>

                              <div className="bar">
                                <p className="mb-0"><FontAwesomeIcon className="barIcon" icon={faJs} style={{color: "#e4c70c",}} /></p>
                                <span className="barTitle mt-0">JavaScript</span>
                                <ProgressBar className="progressCustom" now={60} label={`${60}%`}  />
                              </div>

                              <div className="bar">
                                <p className="mb-0"><FontAwesomeIcon className="barIcon" icon={faPhp} style={{color: "#46337a",}} /></p>
                                <span className="barTitle mt-0">PHP</span>
                                <ProgressBar className="progressCustom" now={75} label={`${75}%`}  />
                              </div>

                              <div className="bar">
                                <p className="mb-0"><FontAwesomeIcon className="barIcon" icon={faReact} style={{color: "#18a8d8",}} /></p>
                                <span className="barTitle mt-0">ReactJS</span>
                                <ProgressBar className="progressCustom" now={50} label={`${50}%`}  />
                              </div>

                            </div>
                        </div>
                    </Col>
                    <Col xl={6} lg={12} md={12} sm={12}>
                        <div className="professionalSkills">
                            <h5 className="BarTitle">Professional Skills</h5>
                            <div style={{ width:'50%', height:'300px', marginTop:'5rem'}} className="radialBar">
                                <RadialBarChart
                                    width={700}
                                    height={300}
                                    cx={200}
                                    cy={150}
                                    innerRadius={50}
                                    outerRadius={120}
                                    barSize={12}
                                    data={data}>
                                    <RadialBar
                                        minAngle={50}
                                        label={{ position: "insideStart", fill: "#fff" }}
                                        background
                                        clockWise
                                        dataKey="skill"
                                    />
                                    <Legend
                                        iconSize={12}
                                        width={148}
                                        height={140}
                                        layout="vertical"
                                        verticalAlign="middle"
                                        wrapperStyle={style}
                                    />
                                    <Tooltip/>
                                </RadialBarChart>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
        
    </Fragment>
  )
}

export default Skills