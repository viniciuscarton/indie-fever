import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './gameLatest.css';

import s1 from '../../images/latest/s1.webp';
import s2 from '../../images/latest/s2.webp';
import s3 from '../../images/latest/s3.webp';
import s4 from '../../images/latest/s4.webp';
import s5 from '../../images/latest/s5.webp';
import s6 from '../../images/latest/s6.webp';
import s7 from '../../images/latest/s7.webp';
import s8 from '../../images/latest/s8.webp';

export default function Latest() {
    const [activeBlock, setActiveBlock] = useState(null);
    const handleBlockClick = (index) => {
        setActiveBlock(index);
    };
    return (
        <div className="container">
            <h1 className="title">Latest</h1>
            <Row className='Latest-blocks'>
                <Col md='2'>
                    <div
                        className={`image-container ${activeBlock === 0 ? 'active' : ''}`}
                        onClick={() => handleBlockClick(0)}>
                        <img src={s7} alt='Image' />
                        <a className='price'>$7,90</a>
                        <a className='platform'>web</a>
                        <div className='image-text'>
                            <h2>Lorem Ipsum
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </Col>
                <Col md='2'>
                    <div className='image-container'>
                        <img src={s1} alt='Image' />
                        <a className='price'>$3,90</a>
                        <a className='platform'>pc</a>
                        <div className='image-text'>
                            <h2>Lorem Ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </Col><Col md='2'>
                    <div className='image-container'>
                        <img src={s2} alt='Image' />
                        <a className='price'>free</a>
                        <a className='platform'>web</a>
                        <div className='image-text'>
                            <h2>Lorem Ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </Col><Col md='2'>
                    <div className='image-container'>
                        <img src={s3} alt='Image' />
                        <a className='price'>$39</a>
                        <a className='platform'>pc</a>
                        <div className='image-text'>
                            <h2>Lorem Ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </Col>
                <Col md='2'>
                    <div className='sr image-container'>
                        <img src={s8} alt='Image' />
                        <a className='price'>$7,90</a>
                        <a className='platform'>web</a>
                        <div className='image-text'>
                            <h2>Lorem Ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </Col><Col md='2'>
                    <div className='sr image-container'>
                        <img src={s4} alt='Image' />
                        <a className='price'>$19,90</a>
                        <a className='platform'>pc</a>
                        <div className='image-text'>
                            <h2>Lorem Ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </Col><Col md='2'>
                    <div className='sr image-container'>
                        <img src={s5} alt='Image' />
                        <a className='price'>$7,90</a>
                        <a className='platform'>web</a>
                        <div className='image-text'>
                            <h2>Lorem Ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </Col><Col md='2'>
                    <div className='sr image-container'>
                        <img src={s6} alt='Image' />
                        <a className='price'>$7,90</a>
                        <a className='platform'>web</a>
                        <div className='image-text'>
                            <h2>Lorem Ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className='latest-button'>
                <button className='ver'> ver todos </button>
                <button className='ver'> ver mais </button>
            </div>
        </div>
    );
}