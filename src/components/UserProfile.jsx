import Profile from './Profile'
// import PropTypes from 'prop-types'

export default function UserProfile({ user }) {
  return (
    <div>
      <Profile
        url={user.avatar}
        title={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  )
}
