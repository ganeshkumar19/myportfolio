import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './Services.css'
import { motion } from "framer-motion";
import { InView } from 'react-intersection-observer';
import { 
  FaReact, 
  FaMobileAlt, 
  FaServer, 
  FaCogs, 
  FaPalette, 
  FaCode 
} from 'react-icons/fa';

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
          title: 'React.js Development',
          description: 'Building responsive web applications with React.js, implementing component-based architecture and global state management.',
          icon: <FaReact size={30} />
        },
        {
          id: 2,
          title: 'React Native Development',
          description: 'Creating cross-platform mobile applications for iOS and Android using React Native with role-based navigation.',
          icon: <FaMobileAlt size={30} />
        },
        {
          id: 3,
          title: 'API Integration & Firebase',
          description: 'Integrating REST APIs, Firebase authentication, and implementing real-time data fetching with TanStack React Query.',
          icon: <FaServer size={30} />
        },
        {
          id: 4,
          title: 'State Management',
          description: 'Implementing global state management using Context API, Zustand, and efficient data synchronization across components.',
          icon: <FaCogs size={30} />
        },
        {
          id: 5,
          title: 'UI/UX Development',
          description: 'Creating modern, responsive interfaces using HTML5, CSS3, Bootstrap 5, and Chakra UI with multilingual support.',
          icon: <FaPalette size={30} />
        },
        {
          id: 6,
          title: 'Full-Stack Projects',
          description: 'Developing complete applications with frontend and backend integration, database management, and deployment.',
          icon: <FaCode size={30} />
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
                        <div className='d-flex justify-content-between align-items-center'>
                            <h2>{`0${service.id}`}</h2>
                            <div className='service-icon'>
                                {service.icon}
                            </div>
                        </div>
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