import { connect } from 'react-redux'
import { ProfileActions } from 'redux/reducer/profile'
import { PhotosType } from 'types/reducers-types'

import MyPost from '.'

const { addPost } = ProfileActions
export interface PostType {
  id: number
  message: string
  likeCount: number
  shareCount: number
  photo: PhotosType
}

let mapStateToProps = (state: any) => {
  return {
    post: state.profile.post,
    photo: state.profile.profile!.photos.small,
  }
}

let MyPostContainer: any = connect(mapStateToProps, {
  addPost,
})(MyPost)

export default MyPostContainer
