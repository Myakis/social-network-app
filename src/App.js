import logo from './logo.svg';
import './App.css';
import Header from './componetns/header/Header';
import Navbar from './componetns/aside/Navbar';
import MainBlog from './componetns/profile/ProfilPage';
import Messages from './componetns/messages/Messages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Music from './componetns/music/Music';
import News from './componetns/news/News';
import Setting from './componetns/setting/Setting';

const App = props => {
  return (
    <Router>
      <div className='wrapper'>
        <Header />
        <Navbar />
        <main className='content'>
          <Routes>
            <Route path='/' element={<MainBlog />} />
            <Route path='/profile' element={<MainBlog post={props.post} />} />
            <Route path='/messages/*' element={<Messages dialogs={props.dialogs} message={props.message} />} />
            <Route path='/music' element={<Music />} />
            <Route path='/news' element={<News />} />
            <Route path='/setting' element={<Setting />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
