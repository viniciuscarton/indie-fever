import React, { useState } from 'react';
import '../all/loginmodal.css';

function LoginModal({ closeModal }) {
  const [isLogin, setIsLogin] = useState(true);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    let username = '';
    let confirmPassword = '';

    if (isLogin) {
      try {
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if (response.ok) {
          alert(data.message);
          closeModal();
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error('Error logging in: ', error);
      }
    } else {
      username = event.target.elements.username.value;
      confirmPassword = event.target.elements['confirm-password']?.value;
      if (password !== confirmPassword) {
        alert("Passwords don't match");
        return;
      }
      try {
        const response = await fetch('http://localhost:3000/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, email, password }),
        });

        const data = await response.json();
        if (response.ok) {
          alert(data.message);
          closeModal();
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error('Error signing up: ', error);
      };
    }
  };
  return (
    <div className={`login-container${isLogin ? '' : ' signup'}`}>
      <h2>{isLogin ? 'login' : 'sign up'}</h2>
      <form className='login-form' onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            <input className='login-input' placeholder="Username" id="username" name="username" required />
          </>
        )}
        <input className='login-input' placeholder="E-mail" id="email" name="email" required />
        <input className='login-input' placeholder="Password" id="password" type="password" name="password" required />
        {!isLogin && (
          <>
            <input className='login-input' placeholder="Confirm password" id="confirm-password" type="password" name="confirm-password" required />
          </>
        )}
        <div className='login-buttons'>
          <button className='login-button' type="submit">{isLogin ? 'login' : 'signup'}</button>
          {isLogin ? (
            <>
              <button className='login-button' type="button" onClick={() => setIsLogin(false)}>sign up</button>
            </>
          ) : (
            <button className='login-button' type="button" onClick={() => setIsLogin(true)}>login</button>
          )}
          <button className='login-button' onClick={closeModal}>cancel</button>
        </div>
        <a href=''>Forgot your password?</a>
      </form>
    </div>
  );
}
export default LoginModal;
