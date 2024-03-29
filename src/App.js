import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/all/navbar';
import Grid from './components/home/grid';
import GameTags from './components/home/gameTags';
import NewsTags from './components/news/newsTags'
import NewsContent from './components/news/newsContent';
import Footer from './components/all/footer';
import Latest from './components/home/gameLatest';
import MostPopular from './components/home/gameMostPopular';
import Promo from './components/home/gamePromo';
import NextPage from './components/news/nextPage';
import Post from './components/post/post';
import "@fontsource/merriweather"
import s1 from './images/news/s1.webp';
import s2 from './images/news/s2.webp';
import s3 from './images/news/s3.webp';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

const images = [s1, s2, s3];

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const handleNextPageClick = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <>
      <Navbar />
      <div className="App-body">
        <Routes>
          <Route path="*" element={
            <>
              <Grid />
              <GameTags />
              <Promo />
              <MostPopular />
              <Latest />
            </>
          } />
          <Route path="/news" element={
            <>
              <NewsTags />
              <NewsContent/>
              {/* <NewsContent image={images[1]} />
              <NewsContent image={images[2]} /> */}
              <NextPage pageNumber={currentPage + 1} onClick={handleNextPageClick} />
            </>
          } />
          <Route path="/post" element={
            <>
            <Post />
            </>
          } />
        </Routes>
      </div>
      <div className='App-footer'>
        <Footer />
      </div>
    </>
  );
};
export default App;
