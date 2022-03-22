import './App.css';
import Navbar from './componetns/aside/Navbar';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store-redux';
import { Route, Routes } from 'react-router-dom';
import Music from './componetns/music/Music';
import News from './componetns/news/News';
import Setting from './componetns/setting/Setting';
import MessagesConteiner from './componetns/messages/MessagesConteiner';
import UsersContainer from './componetns/users/UsersContainer';
import ProfileContainer from './componetns/profile/ProfileContaner';
import HeaderContainer from './componetns/header/HeaderContainer';
import Login from './componetns/login/Login';
import React from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './componetns/common/preloader/Preloader';
import { compose } from 'redux';
import withRouter from './componetns/profile/CustomWitdhRouter';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className='wrapper'>
        <HeaderContainer />
        <Navbar />
        <main className='content'>
          <Routes>
            <Route path='/profile/' element={<ProfileContainer />} />
            <Route path='/profile/:id' element={<ProfileContainer />} />
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
  }
}
const mapStateToProps = state => {
  return {
    initialized: state.app.initialized,
  };
};

export default connect(mapStateToProps, {
  initializeApp,
})(App);
