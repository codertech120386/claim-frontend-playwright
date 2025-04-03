import axios from './configs/axios';
import { useState } from 'react';

const SubmitAccountNumber = () => {
  const [userId, setUserId] = useState('');
  const [accountNumber, setAccountNumber] = useState('');

  const handleAccountNumberSubmit = async () => {
    const accountNumberSubmitResponse = await axios.post(
      '/submit-account-number',
      {
        userId,
        accountNumber,
      }
    );

    if (accountNumberSubmitResponse?.data?.success) {
      console.log('Account Number submitted');
    } else {
      console.log('Account Number not submitted');
    }
  };

  return (
    <div>
      <h1>Submit Account Number</h1>
      <label htmlFor='userId'>User Id: </label>
      <br />
      <input
        type='text'
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <br />
      <label htmlFor='accountNumber'>Account Number: </label>
      <br />
      <input
        type='text'
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
      />
      <br />
      <button onClick={handleAccountNumberSubmit}>Submit Account Number</button>
    </div>
  );
};

export default SubmitAccountNumber;
