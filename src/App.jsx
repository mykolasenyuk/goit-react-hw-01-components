import UserProfile from './components/UserProfile'
import Section from './components/Section'
import user from '../src/user.json'

export default function App() {
  return (
    <div>
      <Section
        title="Task 1
      "
      >
        <UserProfile user={user} />
      </Section>
    </div>
  )
}
