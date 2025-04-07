import axios from './configs/axios';
import { useState } from 'react';

const SearchRaiseClaim = () => {
  const [userId, setUserId] = useState('');

  const clickEpfoHandler = async () => {
    const searchRaiseClaimResponse = await axios.post('/search-raise-claim', {
      userId,
    });

    if (searchRaiseClaimResponse?.data?.success) {
      console.log('Raise Claim Searched');

      setTimeout(async () => {
        const raiseClaimResponse = await axios.post(
          '/click-raise-claim-without-iframe',
          {
            userId,
          }
        );

        if (raiseClaimResponse?.data?.success) {
          console.log('Claim Raised successfully');
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
      <h1>Umang Search Raise Claim</h1>
      <label htmlFor='userId'>User Id: </label>
      <br />
      <input
        type='text'
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <br />
      <button onClick={clickEpfoHandler}>Search Raise Claim</button>
    </div>
  );
};

export default SearchRaiseClaim;
