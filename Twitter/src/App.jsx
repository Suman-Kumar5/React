import { useState } from 'react'
import "./App.css"


function App() {

  return (
    <div className="app">
      <div className="logo-box">
        <img src="./twitter.png" alt="twitter.png" className='logo' />
        <h2>Sign in to Twitter</h2>
        <button>
          <img src="./google.png" alt="google" />
          Sign in with Google
        </button>
        <button>
          <img src="./apple.png" alt="google" />
          Sign in with Apple
        </button>
        <hr />
        <span>Or</span>
        <form action="">
          <input type="text" name="" id="" placeholder='Phone email or username' />
          <button className='btn'>Next</button>
          <button>Forgot Password</button>
          <p>Don't Have an account <a href="">Sign Up</a></p>
        </form>
      </div>
    </div>
  )
}

export default App
