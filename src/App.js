import logo from './logo.svg';
import './App.css';
import Header from './componetns/header/Header';
import Navbar from './componetns/aside/Navbar';
import MainBlog from './componetns/profile/ProfilPage';
import Messages from './componetns/messages/Messages';
import { Route, Routes } from 'react-router-dom';
import Music from './componetns/music/Music';
import News from './componetns/news/News';
import Setting from './componetns/setting/Setting';

const App = props => {
  return (
    <div className='wrapper'>
      <Header />
      <Navbar />
      <main className='content'>
        <Routes>
          <Route path='/profile' element={<MainBlog state={props.state.profile} dispatch={props.dispatch} />} />
          <Route path='/messages/*' element={<Messages state={props.state.dialog} dispatch={props.dispatch} />} />
          <Route path='/music' element={<Music />} />
          <Route path='/news' element={<News />} />
          <Route path='/setting' element={<Setting />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
