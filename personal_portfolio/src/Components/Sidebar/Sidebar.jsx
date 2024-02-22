import React, { Fragment } from 'react'
import { Container, Nav } from 'react-bootstrap'
import { fallDown as Menu } from 'react-burger-menu';
import "../../assets/css/bootstrap.min.css"
import "../../assets/css/custom.css"

const Sidebar = () => {
  return (
    <Fragment>
        <Container fluid={true} className="p-0">
            <Menu>
              <Nav>
                <Nav.Item>
                  <Nav.Link className="bm-item-list" href="#">
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="bm-item-list" href="#">
                    About
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="bm-item-list" href="#">
                    Service
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="bm-item-list" href="#">
                    Skills
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="bm-item-list" href="#">
                    Projects
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="bm-item-list" href="#">
                    Contact
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Menu>
        </Container>
    </Fragment>
  )
}

export default Sidebar