import PropTypes from 'prop-types'

export default function Profile(props) {
  const { url, title, tag, location, followers, views, likes } = props

  return (
    <div class="profile">
      <div class="description">
        <img src={url} alt={title} class="avatar" />
        <p class="name">{title} </p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  )
}
Profile.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
}
