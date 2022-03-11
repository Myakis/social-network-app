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
          {/* <Route path='/' element={<MainBlog />} /> */}
          <Route path='/profile' element={<MainBlog state={props.state.profile} addPost={props.addPost} />} />
          <Route path='/messages/*' element={<Messages state={props.state.dialog} />} />
          <Route path='/music' element={<Music />} />
          <Route path='/news' element={<News />} />
          <Route path='/setting' element={<Setting />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
