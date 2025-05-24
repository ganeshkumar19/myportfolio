import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaGithub, FaLinkedin, FaInstagram, FaUserTie } from "react-icons/fa";
import './Footer.css'

const Footer = () => {

    const iconLinks = [
        {id: 1, icon: FaGithub, link: 'https://github.com/ganeshkumar19/'},
        {id: 2, icon: FaLinkedin, link: 'https://www.linkedin.com/in/ganeshkumar-thennavan-388b141ba/'},
        {id: 3, icon: FaUserTie, link: 'https://www.naukri.com/mnjuser/profile?id=&altresid'}
    ]

    const handleRedirect = (url) => {
            window.open(url, '_blank');
      };
  return (
   <Container>
    <Row className='pb-4 g-4'>
        <Col xs={12} md={6} className=''>
        <div className='footerinfoContainer d-flex flex-column justify-content-center align-items-center align-items-md-start gap-3'>
            <p className='m-0 p-0'>Ganesh Kumar</p>
            <span className='text-center text-md-start'>Proactive and driven Front-End Developer Proficient in developing highly responsive user interfaces for mobile and web platforms using React Native and React.js, enhancing user engagement and satisfaction.</span>
        </div>
        </Col>
        <Col xs={12} md={6} className='d-flex justify-content-center justify-content-md-end align-items-center '>
        <div className='footericonContainer d-flex  align-items-center gap-3'>
            {iconLinks.map(icon=> (
                <React.Fragment key={icon.id}>
                    <icon.icon className='footericon'  onClick={() => handleRedirect(icon.link)}/>
                </React.Fragment>
            ))}
        </div>
        </Col>
        <Col xs={12}>
        <hr className='footerLine'></hr>
        <p className='my-3 p-0'>© 2024 Ganesh Kumar. All rights reserved.</p>
        </Col>
    </Row>
   </Container>
  )
}

export default Footer