import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './newsContent.css';
import NextPage from './nextPage';

export default function NewsContent(props) {
    const [newsData, setNewsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;
    useEffect(() => {
        async function fetchNewsData() {
            try {
                const response = await fetch('http://localhost:3000/post');
                const data = await response.json();
                setNewsData(data);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        }
        fetchNewsData();
    }, []);
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const displayedNewsData = newsData.slice(startIndex, endIndex);
    return (
        <div className='containerNews'>
            <div className='shortNews'>
                {displayedNewsData.map((newsItem, index) => (
                    <div className='shortHeadlines' key={index}>
                        <div className='textHeadings'>
                            <a href=''><h1>{newsItem.title}</h1></a>
                            <p> {newsItem.subtitle} </p>
                            <a href=''><h2> Author: {newsItem.author}</h2></a>
                            <h3> Date: {new Date(newsItem.date).toLocaleDateString()}</h3>
                            <br/>
                            <p> {newsItem.content} </p>
                            <br/>
                            <div className='tags'>
                                {newsItem.tags.split(',').map((tag, tagIndex) => (
                                    <React.Fragment key={tagIndex}>
                                        {tagIndex > 0 && ', '}
                                        <a href='' key={tagIndex}>{tag.trim()}</a>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <NextPage
                currentPage={currentPage}
                totalPages={Math.ceil(newsData.length / postsPerPage)}
                onClickNext={() => setCurrentPage(currentPage + 1)}
            />
        </div>
    );
}
