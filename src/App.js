import './App.css';
import ChatRoom  from './components/ChatRoom';
import SignIn from './components/SignIn';

import {auth} from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';



function App() {
const [user] = useAuthState(auth);

  return (
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
  );
}

export default App;
