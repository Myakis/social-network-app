import { connect } from 'react-redux';
import { addPost } from '../../../redux/reducer/profile-reducer.ts';
import MyPost from './MyPosts';

let mapStateToProps = state => {
  return {
    post: state.profile.post,
    valueText: state.profile.textPost,
    photo: state.profile.profile.photos.small,
  };
};

let MyPostConteiner = connect(mapStateToProps, {
  addPost,
})(MyPost);

export default MyPostConteiner;
