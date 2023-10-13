import React, { useState } from 'react';
import axios from 'axios';

function SignInForm() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [token, setToken] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleLogin = () => {
    axios.post('/signin', formData)
      .then((response) => {
        setToken(response.data.token);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
      <div>
        {token && <p>Token: {token}</p>}
      </div>
    </div>
  );
}

export default SignInForm



// Yeah this is never getting used. 