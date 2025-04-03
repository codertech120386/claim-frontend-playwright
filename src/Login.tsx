import axios from './configs/axios';
import { useState } from 'react';

const Login = () => {
  const [mobile, setMobile] = useState('');
  const [mpin, setMpin] = useState('');

  const loginClicked = async () => {
    const response = await axios.post('/login-with-mpin', { mobile, mpin });
    console.log('*********');
    console.log('response.data: ', response.data);
    console.log('*********');
  };

  return (
    <div>
      <h1>Umang Login</h1>
      <label htmlFor='mobile'>Mobile</label>
      <input
        type='text'
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />

      <label htmlFor='mpin'>Mpin</label>
      <input
        type='text'
        value={mpin}
        onChange={(e) => setMpin(e.target.value)}
      />

      <button onClick={loginClicked}>Login</button>
    </div>
  );
};

export default Login;
