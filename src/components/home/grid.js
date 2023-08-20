import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './grid.css';

import s1 from '../../images/grid/s1.webp';
import s2 from '../../images/grid/s2.webp';
import s3 from '../../images/grid/s3.webp';
import s4 from '../../images/grid/s4.webp';
import s5 from '../../images/grid/s5.webp';
import s6 from '../../images/grid/s6.webp';
import s7 from '../../images/grid/s7.webp';
import s8 from '../../images/grid/s8.webp';

export default function Grid() {
    const [activeBlock, setActiveBlock] = useState(null);
    const handleBlockClick = (index) => {
        setActiveBlock(index);
    };
    return (
        <div className="container">
            <h1 className="title" >Trending</h1>
            <Row className='Grid-blocks d-flex justify-content-center'>
                <Col md='5'>
                    <div
                        className={`image-container ${activeBlock === 0 ? 'active' : ''}`}
                        onClick={() => handleBlockClick(0)}>
                        <img src={s7} alt='Image' />
                        <div className='Grid-image-text'>
                            <h2>Lorem Ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non dolor vehicula, tincidunt tellus vel, ultricies ligula.</p>
                        </div>
                    </div>
                </Col>
                <Col md='2'>
                    <div className='image-container'>
                        <img src={s1} alt='Image' />
                        <div className='Grid-image-text'>
                            <h2>Lorem Ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </Col><Col md='2'>
                    <div className='image-container'>
                        <img src={s2} alt='Image' />
                        <div className='Grid-image-text'>
                            <h2>Lorem Ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </Col><Col md='2'>
                    <div className='image-container'>
                        <img src={s3} alt='Image' />
                        <div className='Grid-image-text'>
                            <h2>Lorem Ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </Col><Col md='5'>
                    <div className='image-container'>
                        <img src={s8} alt='Image' />
                        <div className='Grid-image-text'>
                            <h2>Lorem Ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non dolor vehicula, tincidunt tellus vel, ultricies ligula.</p>
                        </div>
                    </div>
                </Col><Col md='2'>
                    <div className='image-container'>
                        <img src={s4} alt='Image' />
                        <div className='Grid-image-text'>
                            <h2>Lorem Ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </Col><Col md='2'>
                    <div className='image-container'>
                        <img src={s5} alt='Image' />
                        <div className='Grid-image-text'>
                            <h2>Lorem Ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </Col><Col md='2'>
                    <div className='image-container'>
                        <img src={s6} alt='Image' />
                        <div className='Grid-image-text'>
                            <h2>Lorem Ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}