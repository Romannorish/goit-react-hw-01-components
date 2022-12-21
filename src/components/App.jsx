import Profile from "components/Profile/Profile";
import Statistics from 'components/Statistics/Statistics'
import TransactionHistory from 'components/Transactions/TransactionHistory'
import FriendList from 'components/FriendsList/FriendsList';

import user from 'data/user'
import data from 'data/data'
import friends from 'data/friends'
import transactions from 'data/transactions'


export function App() {
  return <div>
    <Profile 
            avatar={user.avatar}
            username={user.username}
            tag={user.tag}
            location={user.location}
            stats={user.stats}
    />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
    <Statistics  title="Upload stats" stats={data} />
    <Statistics stats={data} />
    
  </div>
}

