import logo from './logo.svg';
import './App.css';
import Header from './componetns/header/Header';
import Navbar from './componetns/aside/Navbar';
import MainBlog from './componetns/profile/ProfilPage';
const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Navbar />
      <MainBlog />
    </div>
  );
};

export default App;
