import React from 'react'
import './About.css'
import { Col, Container, Row } from 'react-bootstrap'
import PROFILE from '../../assets/profile.jpg'

const About = () => {
  return (
    <Container fluid className='my-2' id="about">
        <Row>
            <Col xs={12} className='d-flex align-items-center'>
            <div className='about-title-container'>
                <h2>About Me</h2>
            </div>
            </Col>
        </Row>
        <Row className='g-4 my-2 p-md-3'>
            <Col xs={12} md={3} className='d-flex align-items-center justify-content-center align-items-md-start justify-content-md-start'>
                <div className='about-image-container'>
                    <img src={PROFILE}/>
                </div>
            </Col>
            <Col xs={12} md={9} className='d-flex flex-column align-items-start'>
                <div className='about-info-container d-flex flex-column gap-1'>
                    <p className=''>I am an Proactive and driven Front-End Developer with comprehensive training in Full Stack Development, including proficiency in HTML, CSS, JavaScript, React, Python, and MySQL.</p>
                    <p>Currently enhancing front-end capabilities while equipped with a strong foundation in both client-side and server-side technologies.</p>
                </div>
                <div className='about-skills d-flex flex-column gap-3 w-100 pe-4'>
                <div className='about-skill d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3'>
                    <p className='m-0 p-0'>
                            HTML & CSS 
                    </p>
                    <hr style={{ width: '70%' }} />
                </div>
                <div className='about-skill d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3'>
                        <p className='m-0 p-0'>
                        React JS 
                        </p>
                        <hr style={{ width: '50%' }} />
                </div>
                <div className='about-skill d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3'>
                        <p className='m-0 p-0'>
                        JavaScript 
                        </p>
                        <hr style={{ width: '90%' }} />
                </div>
                <div className='about-skill d-flex flex-column flex-md-row align-items-start align-items-md-center gap-2'>
                        <p className='m-0 p-0'>
                        Bootstrap 
                        </p>
                        <hr style={{ width: '100%' }} />
                </div>
                </div>
            </Col>
            <Col xs={12}>
            <div className='achievements d-flex justify-content-around my-4'>
                <div className='acheivements-info d-flex flex-column justify-content-center align-items-center'>
                 <h1>1+</h1>
                 <p>Years of Expierence</p>
                </div>
                <hr className='d-flex jusitfy-content-center align-items-center text-center ' style={{color: 'white', height: '100%', width: '100px', transform: 'rotate(90deg)', marginTop: '40px', opacity: 1.7}}/>
                <div className='acheivements-info d-flex flex-column justify-content-center align-items-center'>
                 <h1>3+</h1>
                 <p>Projects</p> 
                </div>
            </div>
            </Col>
        </Row>
    </Container>
  )
}

export default About