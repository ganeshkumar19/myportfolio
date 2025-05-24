import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PROFILE from '../../assets/profile.jpg'
import './Hero.css'


const Hero = () => {
  return (
    <Container fluid className='d-flex flex-column align-items-center justify-content-center heroContainer' id='home'>
        <Row className='d-flex flex-column align-items-center justify-content-center mt-4'>
            <Col xs={12} className='d-flex flex-column align-items-center justify-content-center'>
              <div className='profileImageContainer'>
                <img src={PROFILE}/>
              </div>
            </Col>
            <Col xs={12} className='d-flex flex-column align-items-center justify-content-center profileInfoCol mt-4'>
              <div className='profileInfoContainer text-center'>
                <h1 className='my-2'><span>I'm Ganesh Kumar</span>, Frontend Developer Based in CBE.</h1>
                <p className='m-0 p-0 my-3'>Proactive and driven Front-End Developer with comprehensive training in Full Stack Development, including proficiency in HTML, CSS, JavaScript, React, Python, and MySQL.</p>
              </div>
            </Col>
            <Col xs={12} className='d-flex flex-column align-items-center justify-content-center my-4'>
              <div className='profilebuttonContainer d-flex align-items-center justify-content-center gap-3'>
                <div className="connectme d-flex text-center">Connect With Me</div>
                <div className="myresume text-center">My resume</div>
              </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Hero