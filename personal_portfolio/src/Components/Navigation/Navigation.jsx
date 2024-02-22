import React, { Fragment, useState, useEffect } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import "../../assets/css/bootstrap.min.css"
import "../../assets/css/custom.css"

const Navigation = () => {
  const [scroll, setScroll]=useState(
    {
        logoTitle: 'logoTitle',
        navigationBar:'navigationBar',
        menuBarList:'menuBarList',
    }
);
const onScroll=()=>{
    if(window.scrollY>30){
        setScroll({logoTitle: 'logoTitleScroll', navigationBar:'navigationBarScroll', menuBarList:'menuBarListScroll'})
    }else if(window.scrollY<30){
        setScroll({logoTitle: 'logoTitle', navigationBar:'navigationBar', menuBarList:'menuBarList',})
    }
}
useEffect(()=>{
    window.addEventListener('scroll',onScroll);
}, []);
  return (
    <Fragment>
      <Container className="mainNavBar">
        <Navbar fixed="top" expand="lg" className={scroll.navigationBar}>
          <Container fluid>
              <Navbar.Brand className={scroll.logoTitle}>SABIHA.</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                  <Nav className="menuBar" navbarScroll>
                      <Nav.Link className={scroll.menuBarList}>About</Nav.Link>
                      <Nav.Link className={scroll.menuBarList}>Services</Nav.Link>
                      <Nav.Link className={scroll.menuBarList}>Skills</Nav.Link>
                      <Nav.Link className={scroll.menuBarList}>Projects</Nav.Link>
                      <Nav.Link className={scroll.menuBarList}>Contact</Nav.Link>
                  </Nav>
                  
              </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </Fragment>
  )
}

export default Navigation