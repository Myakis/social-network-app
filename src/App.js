import './App.css';
import Navbar from './componetns/aside/Navbar';
import { Route, Routes } from 'react-router-dom';
import Music from './componetns/music/Music';
import News from './componetns/news/News';
import Setting from './componetns/setting/Setting';
import MessagesConteiner from './componetns/messages/MessagesConteiner';
import UsersContainer from './componetns/users/UsersContainer';
import ProfileContainer from './componetns/profile/ProfileContaner';
import HeaderContainer from './componetns/header/HeaderContainer';
import Login from './componetns/login/Login';

const App = props => {
  return (
    <div className='wrapper'>
      <HeaderContainer />
      <Navbar />
      <main className='content'>
        <Routes>
          <Route path='/profile/' element={<ProfileContainer />} />
          <Route path='/profile/:userId' element={<ProfileContainer />} />
          <Route path='/messages/*' element={<MessagesConteiner />} />
          <Route path='/users' element={<UsersContainer />} />
          <Route path='/music' element={<Music />} />
          <Route path='/news' element={<News />} />
          <Route path='/setting' element={<Setting />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
