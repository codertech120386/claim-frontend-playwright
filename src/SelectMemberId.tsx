import axios from './configs/axios';
import { useState } from 'react';

const SelectMemberId = () => {
  const [userId, setUserId] = useState('');

  const handleMemberIdSubmit = async () => {
    const selectMemberIdSubmitResponse = await axios.post('/select-member-id', {
      userId,
    });

    if (selectMemberIdSubmitResponse?.data?.success) {
      console.log('Member Id selected');
    } else {
      console.log('Member Id not selected');
    }
  };

  return (
    <div>
      <h1>Submit Member Id</h1>
      <label htmlFor='userId'>User Id: </label>
      <br />
      <input
        type='text'
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <br />

      <button onClick={handleMemberIdSubmit}>Submit Member Id</button>
    </div>
  );
};

export default SelectMemberId;
