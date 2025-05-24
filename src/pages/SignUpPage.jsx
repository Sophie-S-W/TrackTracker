import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SignUpPage.css'

import BackgroundPattern from '../assets/SignUpPage/Background.svg'
import YellowBg from '../assets/SignUpPage/Yellow.svg'
import Logo from '../assets/SignUpPage/Signup.svg'
import SubmitButton from '../assets/SignUpPage/CreateAccountButton.svg'

import Header from '../components/Header'

export default function SignUpPage() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async () => {
    if (!username || !email || !password || password !== confirmPassword) {
      setError(password !== confirmPassword ? 'Passwords do not match' : 'All fields are required')
      return
    }
    // TODO: backend
    try {
      // await fetch(...)
      navigate('/login')
    } catch (e) {
      setError('Sign up failed')
    }
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
      <Header />

      <img src={YellowBg} alt="" className="yellow-bg" />

      {/* yellowbg */}
      <div className="sign-up-card">
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
                // placeholder="you@example.com"
              />
            </div>

            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                // placeholder="Your name"
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