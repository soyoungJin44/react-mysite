import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/main/Main';

import LoginForm from './pages/user/LoginForm';
import JoinForm from './pages/user/JoinForm';
import JoinOk from './pages/user/JoinOk';
import ModifyForm from './pages/user/ModifyForm';

import AddList from './pages/guestbook/AddList';
import DeleteForm from './pages/guestbook/DeleteForm';

import AttachForm from './pages/attach/AttachForm';
import ResultForm from './pages/attach/ResultForm';
import AttachForm2 from './pages/attach/AttachForm2';


//css 공통
import './css/Mysite.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />

          <Route path='/user/loginForm' element={<LoginForm />} />
          <Route path='/user/joinForm' element={<JoinForm />} />
          <Route path='/user/joinOk' element={<JoinOk />} />
          <Route path='/user/modifyForm' element={<ModifyForm />} />

          <Route path='/guestbook/addList' element={<AddList />} />
          <Route path='/guestbook/deleteForm/:no' element={<DeleteForm />} />

          <Route path='/attach/attachForm' element={<AttachForm />} />
          <Route path='/attach/resultForm' element={<ResultForm />} />
          <Route path='/attach/attachForm2' element={<AttachForm2 />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;