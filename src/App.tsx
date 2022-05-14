import React, { FC, Suspense, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';

import './App.css';
import News from './pages/News/News';
import Header from './components/Header/Header';
import Navbar from './components/Aside/Navbar';
import { initializeApp } from './redux/reducer/app-reducer';
import Preloader from './components/common/preloader/Preloader';
import PreloaderStart from './components/common/preloader/PreloaderStart';
import { RootStateType } from './redux/store-redux';
import Footer from './components/Footer/Footer';

const ProfileContainer = React.lazy(() => import('./pages/Profile/ProfileContainer'));
const MessagesContainer = React.lazy(() => import('./pages/Dialogs/MessagesContainer'));
const UsersContainer = React.lazy(() => import('./pages/Users/UsersContainer'));
const Login = React.lazy(() => import('./pages/Login/Login'));
const ChatPage = React.lazy(() => import('./pages/Chat/Chat'));

interface IAppProps {}
const App: FC<IAppProps> = () => {
  const initialized = useSelector((state: RootStateType) => state.app.initialized);
  const dispatch = useDispatch();

  const errorHandler = (e: PromiseRejectionEvent) => {
    alert(`Произошла ошибка \nНазвание: ${e.reason}`);
  };

  useEffect(() => {
    dispatch(initializeApp());
    window.addEventListener('unhandledrejection', errorHandler);
    return () => {
      window.removeEventListener('unhandledrejection', errorHandler);
    };
  }, []);

  if (!initialized) {
    return <PreloaderStart />;
  }

  return (
    <div className='wrapper'>
      <Header />
      <Navbar />
      <main className='content'>
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route path='/' element={<Navigate to={'/profile'} />} />
            <Route path='/profile' element={<ProfileContainer />} />
            <Route path='/profile/:id' element={<ProfileContainer />} />
            <Route path='/messages' element={<MessagesContainer />} />
            <Route path='/chat/' element={<ChatPage />} />
            <Route path='/users*' element={<UsersContainer />} />
            <Route path='/news' element={<News />} />
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
