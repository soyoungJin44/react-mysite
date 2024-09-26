import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/main/Main';

import LoginForm from './pages/user/LoginForm';
import JoinForm from './pages/user/JoinForm';
import JoinOk from './pages/user/JoinOk';
import ModifyForm from './pages/user/ModifyForm';

import AddList from './pages/guestbook/AddList';
import DeleteForm from './pages/guestbook/DeleteForm';



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
          <Route path='/guestbook/deleteForm' element={<DeleteForm />} />
          
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;