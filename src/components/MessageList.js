import React from 'react'

const DATA = [
    {
        senderId: 'louis',
        text: 'Coucou'
    },
    {
        senderId: 'batman',
        text: 'yo ma gueule'
    },
    {
        senderId: 'louis',
        text: 'la pêche !'
    }
]

class MessageList extends React.Component {
    render() {
        return (
            <div className="message-list">
                {DATA.map((message, index) => {
                    return (
                        <div key={index} className="message">
                            <div className="message-username">{message.senderId}</div>
                            <div className="message-text">{message.text}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default MessageList