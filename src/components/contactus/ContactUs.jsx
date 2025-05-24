import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { MdMailOutline, MdPhoneInTalk, MdOutlineLocationOn } from "react-icons/md";
import './ContactUs.css'

const ContactUs = () => {
  return (
    <Container className='d-flex flex-column justify-content-center align-items-center gap-4' id='contact'>
         <Row className=''>
            <Col xs={12} className=''>
            <div className='contact-title-container'>
                <h2>Get in touch</h2>
            </div>
            </Col>
        </Row>
        <Row className='gap-4 gap-md-0'>
            <Col xs={12} md={6} className=''>
            <div className='contact-left-container d-flex flex-column justify-content-center align-items-center justify-content-md-start align-items-md-start'>
                <h2 className='mb-4 text-center'>Let's Talk</h2>
                <p className='text-center text-md-start'>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className='contact-details d-flex flex-column justify-content-center align-items-center justify-content-md-start align-items-md-start gap-3'>
                    <div className='d-flex align-items-center gap-1 gap-md-3'>
                        <span>
                            <MdMailOutline/>
                        </span>
                        <p className='m-0 p-0 contactdataInfo'>ktsganeshkumar@gmail.com</p>
                    </div>
                    <div className='d-flex align-items-center gap-1 gap-md-3'>
                        <span>
                            <MdPhoneInTalk/>
                        </span>
                        <p className='m-0 p-0 contactdataInfo'>7695941098</p>
                    </div>
                    <div className='d-flex align-items-center gap-1 gap-md-3'>
                        <span>
                            <MdOutlineLocationOn/>
                        </span>
                        <p className='m-0 p-0 contactdataInfo'>Coimbatore</p>
                    </div>
                </div>
            </div>
            </Col>
            <Col xs={12} md={6}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Name" className='contactNumberInput' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control type="email" placeholder="Email Address" className='contactNumberInput'/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicFeedback">
                  <Form.Label>Write your message here</Form.Label>
                  <Form.Control as="textarea" rows={7} placeholder="Enter your message" className='contactNumberInput'/>
                </Form.Group>

                <div className='msgButtonContainer my-4'>
                    <button className='msgBtn px-4 py-2'>
                        <p className='p-0 m-0'>Submit Now</p>
                    </button>
                </div>
              </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default ContactUs