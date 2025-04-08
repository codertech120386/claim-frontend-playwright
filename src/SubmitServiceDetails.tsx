import axios from './configs/axios';
import { useState } from 'react';

const SubmitServiceDetails = () => {
  const [userId, setUserId] = useState('');

  const clickEpfoHandler = async () => {
    const submitserviceDetailsResponse = await axios.post(
      '/submit-service-details',
      {
        userId,
      }
    );

    if (submitserviceDetailsResponse?.data?.success) {
      console.log('Service Details Submitted');

      // setTimeout(async () => {
      //   const raiseClaimResponse = await axios.post(
      //     '/click-raise-claim-without-iframe',
      //     {
      //       userId,
      //     }
      //   );

      //   if (raiseClaimResponse?.data?.success) {
      //     console.log('Claim Raised successfully');
      //   } else {
      //     console.log('Claim Not Raised');
      //   }
      // }, 1000);
    } else {
      console.log('Service Details not Submitted');
    }
  };

  return (
    <div>
      <h1>Umang Submit Service Details</h1>
      <label htmlFor='userId'>User Id: </label>
      <br />
      <input
        type='text'
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <br />
      <button onClick={clickEpfoHandler}>Submit Service Details</button>
    </div>
  );
};

export default SubmitServiceDetails;
