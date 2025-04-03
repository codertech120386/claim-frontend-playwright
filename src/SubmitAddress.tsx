import axios from './configs/axios';
import { useState } from 'react';

const SubmitAddress = () => {
  const [userId, setUserId] = useState('');
  const [locality, setLocality] = useState('');
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');

  const handleMemberIdSubmit = async () => {
    const submitAddressResponse = await axios.post('/submit-address', {
      userId,
      locality,
      state,
      district,
      city,
      pincode,
    });

    if (submitAddressResponse?.data?.success) {
      console.log('Address submitted');
    } else {
      console.log('Address not submitted');
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
      <label htmlFor='locality'>Locality: </label>
      <br />
      <input
        type='text'
        value={locality}
        onChange={(e) => setLocality(e.target.value)}
      />
      <br />
      <label htmlFor='state'>State: </label>
      <br />
      <input
        type='text'
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <br />
      <label htmlFor='city'>City: </label>
      <br />
      <input
        type='text'
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <br />
      <label htmlFor='district'>District: </label>
      <br />
      <input
        type='text'
        value={district}
        onChange={(e) => setDistrict(e.target.value)}
      />
      <br />
      <label htmlFor='pincode'>Pincode: </label>
      <br />
      <input
        type='text'
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
      />
      <br />

      <button onClick={handleMemberIdSubmit}>Submit Address</button>
    </div>
  );
};

export default SubmitAddress;
