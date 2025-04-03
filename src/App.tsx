import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Login from './Login';
import ClickEpfo from './ClickEpfo';
import ClickUan from './ClickUan';
import SelectMemberId from './SelectMemberId';
import SubmitAccountNumber from './SubmitAccountNumber';
import SubmitAddress from './SubmitAddress';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/claim-umang/login' element={<Login />} />
        <Route path='/claim-umang/epfo' element={<ClickEpfo />} />
        <Route path='/claim-umang/uan' element={<ClickUan />} />
        <Route
          path='/claim-umang/select-member-id'
          element={<SelectMemberId />}
        />
        <Route
          path='/claim-umang/submit-account-number'
          element={<SubmitAccountNumber />}
        />
        <Route path='/claim-umang/submit-address' element={<SubmitAddress />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
