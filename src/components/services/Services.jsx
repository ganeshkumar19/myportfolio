import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './Services.css'
import { motion } from "framer-motion";
import { InView } from 'react-intersection-observer';

const Services = () => {

  const MotionCol = motion(Col)

  const getVariant = (index) => ({
    hidden: {
      y: index % 2 === 0 ? 100 : -100, // Odd columns start from 100, Even from -100
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
      }
    }, 
  });
    const services = [
        {
          id: 1,
          title: 'Web Development',
          description: 'Building modern and responsive websites using the latest web technologies like React and Bootstrap.',
        },
        {
          id: 2,
          title: 'Mobile App Development',
          description: 'Creating mobile applications for both iOS and Android using React Native, ensuring a smooth and native experience.',
        },
        {
          id: 3,
          title: 'API Integration',
          description: 'Integrating third-party APIs such as Firebase, REST APIs, or GraphQL to provide dynamic content and authentication.',
        },
        {
          id: 4,
          title: 'UI/UX Design',
          description: 'Designing intuitive and aesthetically pleasing user interfaces with a focus on great user experience and usability.',
        }
      ];
      
  return (
    <Container className='d-flex flex-column justify-content-center align-items-center' id='services'>
        <Row>
            <Col xs={12}>
            <div className='services-title-container'>
              <h2>Services</h2>
            </div>
            </Col>
        </Row>
        <Row className='my-3'>
            {services.map((service, index)=>(
              <InView threshold={0.4} triggerOnce={true} key={service.id}>
              {({ ref, inView }) => (
             <MotionCol className='my-3' xs={12} sm={6} md={4} key={service.id} ref={ref} 
             variants={getVariant(index)}
             initial='hidden' 
             animate={inView ? 'visible' : 'hidden'} >
                 <div className='service-card p-3'>
                    <div className='service-info d-flex flex-column justify-content-center gap-2'>
                        <h2>{`0${service.id}`}</h2>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                 </div>
             </MotionCol>
                )}
             </InView>
            ))}
        </Row>
    </Container>
  )
}

export default Services