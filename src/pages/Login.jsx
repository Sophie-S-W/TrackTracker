import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

import BackgroundPattern from '../assets/LoginPage/Background.svg'
import YellowBg from '../assets/LoginPage/YellowBg.svg'
import LoginLogo from '../assets/LoginPage/LoginLogo.svg'
import SubmitButton from '../assets/LoginPage/SubmitButton.svg'
// import MenuIcon from '../assets/Menu.svg'

import Header from '../components/Header';

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = () => {
    // check email format
    if (!email.includes('@')) {
      setError('Invalid Email');
      return;
    }
    // check password not empty
    if (!password) {
      setError('Password cannot be empty');
      return;
    }
    // check 二者是否匹配
    const savedEmail = localStorage.getItem('userEmail');
    const savedPassword = localStorage.getItem('userPassword');
    if (email !== savedEmail || password !== savedPassword) {
      setError('Email or password is incorrect');
      return;
    }
    setError('');
    // 登录成功后跳转首页
    navigate('/');
  };

  return (
    <div className="login-page">
      {/* background */}
      <img
        src={BackgroundPattern}
        alt=""
        className="login-page__background"
      />

      {/* topbar */}
      <Header />

      {/* yellowbg */}
      <img src={YellowBg} alt="" className="login-page__card-bg" />

      {/* title*/}
      <h1 className="login-page__title"></h1>

      {/* login form */}
      <div className="login-page__card">
        {/* LoginLogo */}
        <img
          src={LoginLogo}
          alt=""
          className="login-page__card-logo"
        />

        {/* form */}
        <div className="login-page__form">
          <div className="login-page__field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              // placeholder="you@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="login-page__field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          {error && <div className="login-page__error">{error}</div>}

          {/* submitbotton */}
          <button
            className="login-page__submit"
            onClick={handleSubmit}
            type="button"
          >
            <img src={SubmitButton} alt="Start Tracking!" />
          </button>

          <a href="#" className="login-page__forgot">
            Forgot Password
          </a>
          <div className="login-page__signup">
            Doesn’t have an account? <a href="/signup">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
}