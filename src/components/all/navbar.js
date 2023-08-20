import React, { useState } from 'react';
import styles from '../all/navbar.module.css';
import indieFeverLogo from './indie_fever.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import LoginModal from './loginmodal';

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const handleLoginClick = (event) => {
    setShowModal(!showModal);
  };
  return (
    <nav className={styles.navbar}>
      <ul>
        <img src={indieFeverLogo} className={`${styles.logo} ${styles.spin}`}></img>
        <li><a href="/home">Home</a></li>
        <li><a href="#" onClick={handleLoginClick}>Login/Register </a></li>
        <li><a href="/post"> Post</a></li>
        <li><a href="/news">News</a></li>
        <form>
          <input class="search" type="text" placeholder="Search" />
          <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
        </form>
      </ul>
      {showModal && <LoginModal closeModal={() => setShowModal(false)} />}
    </nav>
  );
}
export default Navbar;