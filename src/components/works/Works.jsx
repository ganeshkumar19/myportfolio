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
          description: 'Splash Chemicals is a professional chemical supplier/solutions company with a polished and clear web presence.'
        },
        {
            id: 2,
            image: NEWWORK2,
            link: 'https://github.com/ganeshkumar19/dhyafarms-frontend',
            title: 'Dhya AquaIntelli',
            description: 'DhyaFarms is a comprehensive aquaculture management platform that I built to help fish farmers monitor and manage their farms more effectively.'
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
    <Row className='my-3'>
    {workdata.map((work, index)=>(
             <Col className='my-3' xs={12} sm={6} key={work.id} onClick={()=> handleRedirect(work.link)}>
                 <div className='work-image-container'>
                    <img src={work.image} className='work-image'/>
                    <div className='work-overlay'>
                        <div className='work-content'>
                            <h4 className='work-title'>{work.title}</h4>
                            <p className='work-description'>{work.description}</p>
                        </div>
                    </div>
                 </div>
             </Col>
            ))}
    </Row>
</Container>
  )
}

export default Works