import UserProfile from './components/Profile/UserProfile';
import Statistic from './components/Statistics/Statistic';
import FriendsList from './components/FriendsList/FriendsList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

export default function App() {
  return (
    <div>
      <UserProfile user={user} />
      <Statistic title="Upload stats" stats={statisticalData} />
      <Statistic stats={statisticalData} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
