import React, { FC, Suspense, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';

import './App.css';
import Music from './componetns/music/Music';
import News from './componetns/news/News';
import Setting from './componetns/setting/Setting';
import HeaderContainer from './componetns/header/HeaderContainer';
import Navbar from './componetns/aside/Navbar';
import { initializeApp } from './redux/reducer/app-reducer';
import Preloader from './componetns/common/preloader/Preloader';
import PreloaderStart from './componetns/common/preloader/PreloaderStart';
import { RootStateType } from './redux/store-redux';
import Footer from './componetns/Footer/Footer';
import Chat from './componetns/chat/Chat';

const ProfileContainer = React.lazy(() => import('./componetns/profile/ProfileContaner'));
const MessagesConteiner = React.lazy(() => import('./componetns/messages/MessagesConteiner'));
const UsersContainer = React.lazy(() => import('./componetns/users/UsersContainer'));
const Login = React.lazy(() => import('./componetns/login/Login'));

interface IAppProps {}
const App: FC<IAppProps> = () => {
  const initialized = useSelector((state: RootStateType) => state.app.initialized);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeApp());
  }, []);

  if (!initialized) {
    return <PreloaderStart />;
  }

  return (
    <div className='wrapper'>
      <HeaderContainer />
      <Navbar />
      <main className='content'>
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route path='/' element={<Navigate to={'/profile'} />} />
            <Route path='/profile' element={<ProfileContainer />} />
            <Route path='/profile/:id' element={<ProfileContainer />} />
            <Route path='/messages/*' element={<MessagesConteiner />} />
            <Route path='/chat/*' element={<Chat />} />
            <Route path='/users*' element={<UsersContainer />} />
            <Route path='/music' element={<Music />} />
            <Route path='/news' element={<News />} />
            <Route path='/setting' element={<Setting />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state: RootStateType) => {
  return {
    initialized: state.app.initialized,
  };
};

export default connect(mapStateToProps, {
  initializeApp,
})(App);
