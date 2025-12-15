import React from 'react'
import './About.css'
import { Col, Container, Row } from 'react-bootstrap'
import PROFILE from '../../assets/person.png'
import { motion } from "framer-motion";
import { InView } from 'react-intersection-observer';


const skillrates = [
    {name: 'HTML & CSS', rate:70},
    {name: 'React JS', rate:100},
    {name: 'JavaScript', rate:90},
    {name: 'Bootstrap', rate:80},
    {name: 'React Native', rate:70},
    {name: 'Node JS', rate:40},
    {name: 'Express JS', rate:40},
    {name: 'Git', rate:70},
    {name: 'GitHub', rate:70},
]

const About = () => {
    const MotionCol = motion(Col)

   

    const imagevariants = ()=>({
        hidden:{
            x:-100,
            opacity: 0
        },
        visible:{
            x:0,
            opacity: 1,
            transition:{
                duration: 0.5,
                ease: 'easeInOut'
            }
        }
    })

    const getVariant = (index) => ({
        hidden: {
          y: index % 2 === 0 ? 100 : -100,
          opacity: 0
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.6,
          }
        }, 
      });

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
                    <InView threshold={0.4} triggerOnce={true}>
                    {({ ref, inView }) => (
                        <motion.img src={PROFILE} ref={ref} variants={imagevariants()} initial='hidden' animate={inView ? 'visible' : 'hidden'}/>
                    )}
                    </InView>
                   
                </div>
            </Col>
            <Col xs={12} md={9} className='d-flex flex-column align-items-start'>
                <div className='about-info-container d-flex flex-column gap-2'>
                    <p>Proactive and detail-oriented React.js Developer with 2 years of experience building responsive web applications.</p>
                    <p>Proficient in JavaScript, React.js, HTML5, CSS3, and Firebase with a strong grasp of component-based architecture, global state management, and RESTful APIs. Completed Bachelor’s in ECE with practical exposure to full-stack projects.</p>
                </div>
                <div className='about-skills d-flex flex-column gap-3 w-100 pe-4 mt-3'>
                    {skillrates.map((skill, index)=>(
                         <InView threshold={0.4} triggerOnce={true} key={index}>
                    {({ ref, inView }) => (
                     <motion.div key={index} className='about-skill d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3' ref={ref} 
                     variants={getVariant(index)}
                     initial='hidden' 
                     animate={inView ? 'visible' : 'hidden'}>
                         <p className='m-0 p-0'>
                                 {skill.name}
                         </p>
                         <hr style={{ width: `${skill.rate}%` }} />
                     </motion.div>
                      )}
             </InView>
                    ))}
                </div>
            </Col>
            <Col xs={12}>
            <div className='achievements d-flex justify-content-around my-4'>
                <div className='acheivements-info d-flex flex-column justify-content-center align-items-center'>
                 <h1>2+</h1>
                 <p>Years of Expierence</p>
                </div>
                <hr className='d-flex jusitfy-content-center align-items-center text-center ' style={{color: 'white', height: '100%', width: '100px', transform: 'rotate(90deg)', marginTop: '40px', opacity: 1.7}}/>
                <div className='acheivements-info d-flex flex-column justify-content-center align-items-center'>
                 <h1>5+</h1>
                 <p>Projects</p> 
                </div>
            </div>
            </Col>
        </Row>
    </Container>
  )
}

export default About