import { FC } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../../redux/reducer/profile-reducer';
import { AppRootReducerType } from '../../../redux/store-redux';
import { UserType } from '../../../types/reducers-types';
import MyPost from './MyPosts';

export interface PostType {
  id: number;
  message: string;
  likeCount: number;
  shareCount: number;
  photo: string;
}

interface ProfileType {
  textPost: string;
  profile: UserType;
  post: PostType;
}

interface PropsType {
  profile: ProfileType;
}

let mapStateToProps = (state: any) => {
  return {
    post: state.profile.post,
    photo: state.profile.profile!.photos.small,
  };
};

let MyPostConteiner: any = connect(mapStateToProps, {
  addPost,
})(MyPost);

export default MyPostConteiner;
