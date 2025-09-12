import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PROFILE from '../../assets/profile.jpg'
import RESUME_PDF from '../../assets/resume.pdf'
import './Hero.css'
import { motion } from "framer-motion";
import { InView } from 'react-intersection-observer';

const Hero = () => {
  // Function to handle email redirect
  const handleConnectWithMe = () => {
    window.location.href = 'mailto:ktsganeshkumar@gmail.com?subject=Portfolio Contact&body=Hi Ganesh, I would like to connect with you regarding...'
  }

  // Function to handle resume download
  const handleResumeDownload = () => {
    const link = document.createElement('a')
    link.href = RESUME_PDF
    link.download = 'Ganesh_Kumar_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Animation variants
  const imageVariants = {
    hidden: {
      scale: 0.7,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeInOut'
      }
    }
  }

  const textVariants = {
    hidden: {
      y: 80,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeInOut'
      }
    }
  }

  const buttonVariants = {
    hidden: {
      y: 30,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
        delay: 0.3
      }
    }
  }

  return (
    <Container fluid className='d-flex flex-column align-items-center justify-content-center heroContainer' id='home'>
        <Row className='d-flex flex-column align-items-center justify-content-center mt-4'>
            <Col xs={12} className='d-flex flex-column align-items-center justify-content-center'>
              <div className='profileImageContainer'>
                <InView threshold={0.4} triggerOnce={true}>
                  {({ ref, inView }) => (
                    <motion.img 
                      src={PROFILE} 
                      ref={ref} 
                      variants={imageVariants}
                      initial='hidden' 
                      animate={inView ? 'visible' : 'hidden'}
                    />
                  )}
                </InView>
              </div>
            </Col>
            <Col xs={12} className='d-flex flex-column align-items-center justify-content-center profileInfoCol mt-5'>
              <InView threshold={0.4} triggerOnce={true}>
                {({ ref, inView }) => (
                  <motion.div 
                    className='profileInfoContainer text-center d-flex flex-column gap-4'
                    ref={ref}
                    variants={textVariants}
                    initial='hidden' 
                    animate={inView ? 'visible' : 'hidden'}
                  >
                    <h1 className=''><span>I'm Ganesh Kumar</span>, React.js Developer.</h1>
                    <p className='m-0 mt-0 mt-md-3'>Proactive and detail-oriented React.js Developer with 2 years of experience building responsive web applications. Proficient in JavaScript, React.js, HTML5, CSS3, and Firebase. Strong grasp of component-based architecture, global state management, and RESTful APIs. Adept at delivering clean, maintainable code and collaborating with cross-functional teams to meet business goals. Completed Bachelor's in ECE with strong practical exposure to full-stack projects.</p>
                  </motion.div>
                )}
              </InView>
            </Col>
            <Col xs={12} className='d-flex flex-column align-items-center justify-content-center my-4'>
              <InView threshold={0.4} triggerOnce={true}>
                {({ ref, inView }) => (
                  <motion.div 
                    className='profilebuttonContainer d-flex align-items-center justify-content-center gap-3'
                    ref={ref}
                    variants={buttonVariants}
                    initial='hidden' 
                    animate={inView ? 'visible' : 'hidden'}
                  >
                    <div className="connectme d-flex text-center" onClick={handleConnectWithMe}>Connect With Me</div>
                    <div className="myresume text-center" onClick={handleResumeDownload}>My resume</div>
                  </motion.div>
                )}
              </InView>
            </Col>
        </Row>
    </Container>
  )
}

export default Hero