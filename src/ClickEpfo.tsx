import axios from './configs/axios';
import { useState } from 'react';

const ClickEpfo = () => {
  const [userId, setUserId] = useState('');

  const clickEpfoHandler = async () => {
    const epfoClickResponse = await axios.post('/click-epfo', { userId });

    if (epfoClickResponse?.data?.success) {
      console.log('EPFO Clicked');

      setTimeout(async () => {
        const raiseClaimResponse = await axios.post('/click-raise-claim', {
          userId,
        });

        if (raiseClaimResponse?.data?.success) {
          console.log('Claim Raised');
        } else {
          console.log('Claim Not Raised');
        }
      }, 1000);
    } else {
      console.log('EPFO Not Clicked');
    }
  };

  return (
    <div>
      <h1>Umang Click Epfo and Raise Claim</h1>
      <label htmlFor='userId'>User Id: </label>
      <br />
      <input
        type='text'
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <br />
      <button onClick={clickEpfoHandler}>Click EPFO and Raise Claim</button>
    </div>
  );
};

export default ClickEpfo;
