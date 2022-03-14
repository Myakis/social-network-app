import './App.css';
import Header from './componetns/header/Header';
import Navbar from './componetns/aside/Navbar';
import MainBlog from './componetns/profile/ProfilPage';
import { Route, Routes } from 'react-router-dom';
import Music from './componetns/music/Music';
import News from './componetns/news/News';
import Setting from './componetns/setting/Setting';
import MessagesConteiner from './componetns/messages/MessagesConteiner';
import UsersContainer from './componetns/users/UsersContainer';

const App = props => {
  return (
    <div className='wrapper'>
      <Header />
      <Navbar />
      <main className='content'>
        <Routes>
          <Route path='/profile' element={<MainBlog store={props.store} />} />
          <Route path='/messages/*' element={<MessagesConteiner store={props.store} />} />
          <Route path='/users' element={<UsersContainer />} />
          <Route path='/music' element={<Music />} />
          <Route path='/news' element={<News />} />
          <Route path='/setting' element={<Setting />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
