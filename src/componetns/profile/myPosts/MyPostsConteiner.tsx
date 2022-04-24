import { connect } from 'react-redux';
import { ProfileActions } from '../../../redux/reducer/profile-reducer';
import { PhotosType, UserType } from '../../../types/reducers-types';
import MyPost from './MyPosts';

const { addPost } = ProfileActions;
export interface PostType {
  id: number;
  message: string;
  likeCount: number;
  shareCount: number;
  photo: PhotosType;
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
