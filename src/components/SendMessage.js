import React from 'react'

class SendMessage extends React.Component {
    render() {
        return (
            <form className="send-message">
                <input
                    placeholder="SendMessage"
                    type="text" />
            </form>
        )
    }
}

export default SendMessage