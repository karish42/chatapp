import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm'
import  ChatFeed  from './components/ChatFeed';

import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>


    return(
        <ChatEngine
            height="100vh"
            projectID="a32fcda7-dacb-469a-b194-de7d3925de9a"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            rederChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
        
        />
    );
}

export default App;