import { NavLink } from 'react-router-dom';
import classes from './../Messages.module.css';
const Dialog = props => {
  return (
    <div className={classes.item}>
      <NavLink to={'/messages/' + props.id}>{props.name}</NavLink>
    </div>
  );
};

export default Dialog;
