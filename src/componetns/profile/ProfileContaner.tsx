import React, { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useParams } from 'react-router-dom';

import ProfilePage from './ProfilPage';
import {
  getStatus,
  setUserProfile,
  updateUserStatus,
  savePhoto,
  saveData,
} from '../../redux/reducer/profile-reducer';
import { isAuthorization } from '../../redux/reducer/auth-reducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { userAPI } from '../../api';
import { AppRootReducerType } from '../../redux/store-redux';
import { UserType } from '../../types/reducers-types';

const mapStateToProps = (state: AppRootReducerType) => ({
  profile: state.profile.profile,
  status: state.profile.status,
  userId: state.auth.userId,
  isLoadAvatar: state.profile.isLoadAvatar,
});

interface PropsType {
  userId: number;
  isOwer: boolean;
  profile: UserType;
  loadProfile: boolean;
  status: string;
  isLoadAvatar: boolean;
  updateUserStatus: string;

  getStatus: (id: number) => void;
  setUserProfile: (data: any) => void;
  saveData: (data: object) => void;
  savePhoto: (data: object) => void;
}

const ProfileContainer: FC<PropsType> = props => {
  //Получаем параметр страницы profile/:id
  const { id } = useParams();

  const [loadProfile, setLoadProfile] = useState(false);
  useEffect(() => {
    let userId: number | undefined = id ? +id : undefined;
    if (!userId) {
      //Если url равен profile, то userId присвоить значение вошедшего пользователя
      userId = props.userId;
    }
    //Запрашиваем статус
    props.getStatus(userId);

    //Меням на false,чтобы спиннер показался
    setLoadProfile(false);

    userAPI.getProfile(userId).then(response => {
      props.setUserProfile(response.data);
      //Меняем на true,чтобы спиннер исчез
      setLoadProfile(true);
    });
  }, [id]);

  return (
    <ProfilePage
      {...props}
      isOwer={!id}
      loadProfile={loadProfile}
      savePhoto={props.savePhoto}
      saveData={props.saveData}
    />
  );
};

//!!РЕАЛИЦИЯ ЧЕРЕЗ КЛАССОВУЮ КОМПОНЕНТУ
// class ProfileContainer extends React.Component {
//   refreshProfile() {
//     let userId = this.props.params.id;
//     if (!userId) {
//       userId = this.props.userId;
//     }
//     this.props.getStatus(userId);

//     userAPI.getProfile(userId).then(response => {
//       this.props.setUserProfile(response.data);
//     });
//   }

//   componentDidMount() {
//     this.refreshProfile();
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     // Если Id из текущих props != Id из прошлых props, меняем
//     if (this.props.params.id !== prevProps.params.id) {
//       this.refreshProfile();
//     }
//   }

//   render() {
//     return <ProfilePage {...this.props} />;
//   }
// }

export default compose<any>(
  connect(mapStateToProps, {
    setUserProfile,
    isAuthorization,
    getStatus,
    updateUserStatus,
    savePhoto,
    saveData,
  }),
  withAuthRedirect,
)(ProfileContainer);