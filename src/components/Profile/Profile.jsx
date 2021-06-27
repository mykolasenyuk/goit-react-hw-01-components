import PropTypes from 'prop-types';
import s from '../Profile/Profile.module.css';
console.log(s);
export default function Profile(props) {
  const { url, title, tag, location, followers, views, likes } = props;

  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={url} alt={title} className={s.avatar} />
        <p className={s.name}>{title} </p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{views}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
Profile.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
