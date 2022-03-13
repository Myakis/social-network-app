import { connect } from 'react-redux';
import { addPostActionCreator, updateTextPostActionCreator } from '../../../redux/profile-reducer';
import MyPost from './MyPosts';

let mapStateToProps = state => {
  return {
    post: state.profile.post,
    valueText: state.profile.textPost,
  };
};
let mapDispatchToProps = dispatch => {
  return {
    addPost: () => {
      let action = addPostActionCreator();
      dispatch(action);
    },
    onChangePost: textPost => {
      let action = updateTextPostActionCreator(textPost);
      dispatch(action);
    },
  };
};

let MyPostConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostConteiner;
