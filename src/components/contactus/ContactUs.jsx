import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { MdMailOutline, MdPhoneInTalk, MdOutlineLocationOn, MdWork, MdCode, MdSchool } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import './ContactUs.css'

const ContactUs = () => {
  // Function to handle email redirect
  const handleEmailClick = () => {
    window.location.href = 'mailto:ktsganeshkumar@gmail.com?subject=Portfolio Contact&body=Hi Ganesh, I would like to connect with you regarding...'
  }

  // Function to handle phone call
  const handlePhoneClick = () => {
    window.location.href = 'tel:+917695941098'
  }

  // Function to handle resume download
  const handleResumeDownload = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf' // Update with your actual resume path
    link.download = 'Ganesh_Kumar_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Container className='d-flex flex-column justify-content-center align-items-center gap-4 mb-5' id='contact' >
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
                <p className='text-center text-md-start'>I'm currently available to take on new projects, so feel free to reach out about anything you'd like me to work on. You can contact me anytime.</p>
                <div className='contact-details d-flex flex-column justify-content-center align-items-center justify-content-md-start align-items-md-start gap-3'>
                    <div className='d-flex align-items-center gap-1 gap-md-3 contact-item' onClick={handleEmailClick} style={{cursor: 'pointer'}}>
                        <span>
                            <MdMailOutline/>
                        </span>
                        <p className='m-0 p-0 contactdataInfo'>ktsganeshkumar@gmail.com</p>
                    </div>
                    <div className='d-flex align-items-center gap-1 gap-md-3 contact-item' onClick={handlePhoneClick} style={{cursor: 'pointer'}}>
                        <span>
                            <MdPhoneInTalk/>
                        </span>
                        <p className='m-0 p-0 contactdataInfo'>+91 7695941098</p>
                    </div>
                    <div className='d-flex align-items-center gap-1 gap-md-3'>
                        <span>
                            <MdOutlineLocationOn/>
                        </span>
                        <p className='m-0 p-0 contactdataInfo'>Coimbatore, Tamil Nadu</p>
                    </div>
                </div>
            </div>
            </Col>
            <Col xs={12} md={6}>
            <div className='contact-right-container d-flex flex-column justify-content-center align-items-center gap-4'>
                <div className='contact-info-section'>
                    <h3 className='mb-3 text-center'>Quick Info</h3>
                    <div className='info-items d-flex flex-column gap-3'>
                        <div className='d-flex align-items-center gap-3'>
                            <MdWork className='info-icon'/>
                            <div>
                                <h6 className='mb-1'>Current Role</h6>
                                <p className='mb-0'>Associate Front-End Developer at Dhya Innovations</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-3'>
                            <MdCode className='info-icon'/>
                            <div>
                                <h6 className='mb-1'>Specialization</h6>
                                <p className='mb-0'>React.js & React Native Development</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-3'>
                            <MdSchool className='info-icon'/>
                            <div>
                                <h6 className='mb-1'>Education</h6>
                                <p className='mb-0'>B.E. in Electronics and Communication Engineering</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='action-buttons d-flex flex-column gap-3 w-100 mt-2'>
                    <button className='btn w-100 connectme' onClick={handleEmailClick}>
                        Send Email
                    </button>
                    <button className='btn w-100 myresume' onClick={handleResumeDownload}>
                        Download Resume
                    </button>
                </div>
            </div>
            </Col>
        </Row>
    </Container>
  )
}

export default ContactUs