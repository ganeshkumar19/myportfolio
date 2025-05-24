import React from 'react'
import './Work.css'
import { Col, Container, Row } from 'react-bootstrap';
import WORK1 from '../../assets/work1.png'
import WORK2 from '../../assets/work2.png'
import WORK3 from '../../assets/work3.png'


const Works = () => {

    const workdata = [
        {
          id: 1,
          image: WORK1,
          link: 'https://hiphoptamizha.com/'
        },
        {
            id: 2,
            image: WORK2,
            link: 'https://splashchemicals.in/'

        },
        {
            id: 3,
            image: WORK3,
            link: 'https://splashpyro.in/'
        },
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
             <Col className='my-3' xs={12} sm={6} md={4} key={work.id} onClick={()=> handleRedirect(work.link)}>
                 <div className='work-image-container'>
                    <img src={work.image} className='work-image'/>
                 </div>
             </Col>
            ))}
    </Row>
</Container>
  )
}

export default Works