import React from 'react'
import Chatkit from '@pusher/chatkit'
import MessageList from './components/MessageList'
import SendMessage from './components/SendMessage'
import RoomList from './components/RoomList'
import NewRoom from './components/NewRoom'

import { tokenUrl, instanceLocator } from './config'

class App extends React.Component {
    
    componentDidMount() {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator,
            userId: 'louis', 
            tokenProvider: new Chatkit.TokenProvider({
                url: tokenUrl
            })
        })
        
        chatManager.connect()
        .then(currentUser => {
            currentUser.subscribeToRoom({
                roomId: 10393851, 
                hooks: {
                    onNewMessage: message => {
                        console.log('message.text: ', message.text);
                    }
                }
            })
        })
    }
    
    render() {
        return (
            <div className="app">
                <RoomList />
                <MessageList />
                <SendMessage />
                <NewRoom />
            </div>
        );
    }
}

export default App