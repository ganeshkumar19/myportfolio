import React from 'react'
import './Work.css'
import { Col, Container, Row } from 'react-bootstrap';
import NEWWORK1 from '../../assets/newwork1.png'
import NEWWORK2 from '../../assets/newwork2.png'

const Works = () => {

    const workdata = [
        {
          id: 1,
          image: NEWWORK1,
          link: 'https://github.com/ganeshkumar19/splashchemicals',
          title: 'Splash Chemicals',
          description: 'Splash Chemicals is a professional chemical supplier/solutions company with a polished and clear web presence.',
          points: [
            'Modern and responsive web design',
            'Efficient product catalog management',
            'Seamless user experience across devices'
          ]
        },
        {
            id: 2,
            image: NEWWORK2,
            link: 'https://github.com/ganeshkumar19/dhyafarms-frontend',
            title: 'Dhya AquaIntelli',
            description: 'DhyaFarms is a comprehensive aquaculture management platform that I built to help fish farmers monitor and manage their farms more effectively.',
            points: [
              'Real-time farm monitoring dashboard',
              'Advanced analytics and reporting',
              'Mobile-friendly interface for on-the-go access'
            ]
        }
      ];

      const handleRedirect = (url) => {
            window.open(url, '_blank');
      };
      
  return (
    <Container className='d-flex flex-column justify-content-center align-items-center' id='portfolio'>
    <Row>
        <Col xs={12}>
        <div className='work-title-container'>
          <h2>My latest work</h2>
        </div>
        </Col>
    </Row>
    {workdata.map((work, index) => {
      const isEven = index % 2 === 1; // Reverse layout for even indices (0-indexed, so index 1 is second item)
      
      return (
        <Row className='work-item-row my-5' key={work.id}>
          <Col 
            xs={12} 
            lg={6} 
            className={`work-image-col ${isEven ? 'order-lg-2' : 'order-lg-1'}`}
          >
            <div className='work-images-wrapper' onClick={() => handleRedirect(work.link)}>
              <div className='work-image-container'>
                <div className='work-image-glow'></div>
                <img src={work.image} className='work-image' alt={work.title} />
                <div className='work-image-overlay'>
                  <span className='work-view-text'>View Project →</span>
                </div>
              </div>
            </div>
          </Col>
          <Col 
            xs={12} 
            lg={6} 
            className={`work-content-col ${isEven ? 'order-lg-1' : 'order-lg-2'}`}
          >
            <div className='work-content-wrapper'>
              <h3 className='work-title'>{work.title}</h3>
              <p className='work-description'>{work.description}</p>
              <ul className='work-points'>
                {work.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <button 
                className='work-link-btn'
                onClick={() => handleRedirect(work.link)}
              >
                View on GitHub →
              </button>
            </div>
          </Col>
        </Row>
      );
    })}
</Container>
  )
}

export default Works