import AboutMe from './aboutMe/AboutMe';
import MyPost from './myPosts/MyPosts';
import classes from './Profile.module.css';

const ProfilPage = props => {
  return (
    <div>
      <div className={classes.header}>
        <img src='https://7oom.ru/wp-content/uploads/peizaji-01.jpg' alt='' />
      </div>
      <div className={classes.wrapper}>
        <AboutMe />
        <MyPost post={props.state.post} dispatch={props.dispatch} valueText={props.state.textPost} />
      </div>
    </div>
  );
};

export default ProfilPage;
