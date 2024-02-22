import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <Fragment>
        <Container fluid={true} className="footerArea">
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <div className="Copyright">
                        <p className="copyrightTitle">Copyright &copy; 2023 <span className="infoTitle"> Sanjida.</span> All Rights Reserved.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </Fragment>

  )
}

export default Footer