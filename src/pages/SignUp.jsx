import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SignUp.css'

import BackgroundPattern from '../assets/SignUpPage/Background.svg'
import YellowBg from '../assets/SignUpPage/Yellow.svg'
import Logo from '../assets/SignUpPage/Signup.svg'
import SubmitButton from '../assets/SignUpPage/CreateAccountButton.svg'

import Header from '../components/Header'
import PreLoginMenu from '../components/PreLoginMenu'

export default function SignUpPage() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async () => {
    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }
    // check 邮箱格式
    if (!email.includes('@')) {
      setError('Invalid Email');
      return;
    }
    // check 两次密码一致
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // 保存注册信息到 localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    setError('');
    // 跳转到登录页
    navigate('/login');
  }

  return (
    <div className="sign-up-page">
      {/* background */}
      <img
        src={BackgroundPattern}
        alt="background pattern"
        className="background-pattern"
      />

      {/* topbar */}
      <Header onMenuClick={() => setMenuOpen(true)} />
      {menuOpen && <PreLoginMenu onClose={() => setMenuOpen(false)} />}

      {/* yellowbg */}
      <div className="sign-up-card">
        <img src={YellowBg} alt="" className="yellow-bg" />
        <div className="card-content">
          {/* Logo */}
          <img src={Logo} alt="Sign up" className="signup-logo" />

          {/* form */}
          <div className="form-container">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
              />
            </div>
            {error && <div className="error-message">{error}</div>}
          </div>

          {/* botton */}
          <div className="submit-wrapper" onClick={handleSubmit}>
            <img src={SubmitButton} alt="Create Account" />
          </div>

          {/* jump */}
          <div className="bottom-text">
            Already have an account? <a href="/login">Login</a>
          </div>
        </div>
      </div>
    </div>
  )
}