import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './newsContent.css';

import s1 from '../../images/news/s1.webp';
import s2 from '../../images/news/s2.webp';
import s3 from '../../images/news/s3.webp';

export default function NewsContent(props) {
    return (
        <div className='containerNews'>
            <div className='shortNews'>
                <div className='shortHeadlines'>
                    <div className='textHeadings'>
                        <a href=''><h1> Lorem Ipsum </h1></a>
                        <a href=''><h2> Author: Lorem Ipsum </h2></a>
                        <h3> Date: 01-jan-1901 </h3>
                        <div className='p'>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum justo et ultrices accumsan. Nunc porta leo in eros ullamcorper. </p>
                            <div className='tags'>
                                <a href=''>tag 1</a>
                                ,
                                <a href=''> tag 2</a>
                                ,
                                <a href=''> tag 3</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='shortHeadlines'>
                    <div className='textHeadings'>
                        <a href=''><h1> Lorem Ipsum </h1></a>
                        <a href=''><h2> Author: Lorem Ipsum </h2></a>
                        <h3> Date: 01-jan-1901 </h3>
                        <div className='p'>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum justo et ultrices accumsan. Nunc porta leo in eros ullamcorper. </p>
                            <div className='tags'>
                                <a href=''>tag 1</a>
                                ,
                                <a href=''> tag 2</a>
                                ,
                                <a href=''> tag 3</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='longNews'>
                <div className='longHeadlines'>
                    <div className='textHeadings'>
                        <a href=''><h1> Lorem Ipsum </h1></a>
                        <a href=''><h2> Author: Lorem Ipsum </h2></a>
                        <h3> Date: 01-jan-1901 </h3>
                    </div>
                    <div className='img'>
                        <a href=''><img src={props.image} alt='Image' /></a>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non dolor sed massa tristique luctus a a diam. Ut turpis lorem, interdum eu mi vel, egestas pharetra augue. Integer ultrices. </p>
                        <div className='tags'>
                            <a href=''>tag 1</a>
                            ,
                            <a href=''> tag 2</a>
                            ,
                            <a href=''> tag 3</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
