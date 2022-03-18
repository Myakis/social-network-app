import { connect } from 'react-redux';
import { addPost } from '../../../redux/profile-reducer';
import MyPost from './MyPosts';

let mapStateToProps = state => {
  return {
    post: state.profile.post,
    valueText: state.profile.textPost,
    photo: state.profile.profile.photos.small,
  };
};
// let mapDispatchToProps = dispatch => {
//   return {
//     addPost: () => {
//       let action = addPostActionCreator();
//       dispatch(action);
//     },
//     onChangePost: textPost => {
//       let action = updateTextPostActionCreator(textPost);
//       dispatch(action);
//     },
//   };
// };

let MyPostConteiner = connect(mapStateToProps, {
  addPost,
})(MyPost);

export default MyPostConteiner;
