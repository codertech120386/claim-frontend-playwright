import axios from './configs/axios';
import { useState } from 'react';

const ClickUan = () => {
  const [userId, setUserId] = useState('');
  // const [uan, setUan] = useState('');

  const clickEpfoHandler = async () => {
    const uanSubmitResponse = await axios.post('/click-uan', { userId });

    if (uanSubmitResponse?.data?.success) {
      console.log('Uan submitted');

      // setTimeout(async () => {
      //   const closeButtonClickResponse = await axios.post(
      //     '/click-close-button',
      //     {
      //       userId,
      //     }
      //   );

      //   if (closeButtonClickResponse?.data?.success) {
      //     console.log('Close button clicked');
      //   } else {
      //     console.log('Close button not clicked');
      //   }
      // }, 7000);
    } else {
      console.log('Uan not submitted');
    }
  };

  return (
    <div>
      <h1>Umang Click UAN submission</h1>
      <label htmlFor='userId'>User Id: </label>
      <br />
      <input
        type='text'
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <br />
      {/* <label htmlFor='uan'>UAN: </label>
      <br />
      <input type='text' value={uan} onChange={(e) => setUan(e.target.value)} />
      <br /> */}
      <button onClick={clickEpfoHandler}>
        Submit UAN and click close button
      </button>
    </div>
  );
};

export default ClickUan;
