import Profile from "./Profile/Profile";
import user from 'data/user'


export default function App() {
  return <div className="App">
    <Profile 
            avatar={user.avatar}
            username={user.username}
            tag={user.tag}
            location={user.location}
            stats={user.stats}
        />
  </div>

}