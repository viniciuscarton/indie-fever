import React, { useState } from 'react';
import '../components/loginmodal.css'

function LoginModal({ closeModal }) {
  const [isLogin, setIsLogin] = useState(true);
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const confirmPassword = event.target.elements['confirm-password']?.value;
    if (!isLogin && password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    if (password === confirmPassword) {
      alert("Check the link sent to your e-mail")
    }
    else
      closeModal();
  };
  return (
    <div className={`login-container${isLogin ? '' : ' signup'}`}>
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form className='login-form' onSubmit={handleSubmit}>
        <input className='login-input' placeholder="E-mail" id="username" name="username" required />
        <input className='login-input' placeholder="Password" id="password" name="password" required />
        {!isLogin && (
          <input className='login-input' placeholder="Confirm password" id="confirm-password" name="confirm-password" required />
        )}
        <div className='login-buttons'>
          <button className='login-button' type="go">{isLogin ? 'Login' : 'Sign Up'}</button>
          {isLogin ? (
            <>
              <button className='login-button' type="button" onClick={() => setIsLogin(false)}>Sign Up</button>
            </>
          ) : (
            <button className='login-button' type="button" onClick={() => setIsLogin(true)}>Login</button>
          )}
          <button className='login-button' onClick={closeModal}>Cancel</button>
        </div>
        <a href=''>Forgot your password?</a>
      </form>
    </div>
  );
}
export default LoginModal;
